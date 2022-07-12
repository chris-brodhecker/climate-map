
var Papa = require('papaparse');
var fs = require('fs');
const { stat } = require('fs/promises');


async function combineCountyDataToJSON() {

  let jsonData = {
    geoData: {}
  }

  return new Promise(async (res, rej) => {
    const countyIncomeData = fs.createReadStream('/Users/chris_brodhecker/dev/climate-map/data/county-data.csv');
    const outputFile = '/Users/chris_brodhecker/dev/climate-map/scripts/combined-county-data.json'
    // In here we are combining information from 'county-data.csv' and 'climdiv-tmpccy-v1.0.0-20220607.tsv' which contains temperature data

    // Parse income data first

    await new Promise((res, rej) => {
      Papa.parse(countyIncomeData, {
        header: true,
        step: result => {
          try {
            jsonData.geoData[result.data.KEY] = result.data
          } catch (e) {
            console.log(e)
          }
        },
        error: function (error) {
          console.log(error)
        },
        complete: function (results) {
          res()
          // fs.writeFile('/Users/chris_brodhecker/dev/climate-map/scripts/jsonData.json', JSON.stringify(jsonData),
          // function (err) {
          //   if (err) {
          //     console.log(err);
          //     rej(err)
          //   } else {
          //     console.log('we good?')
          //     res()
          //   }
          // });
        }
      });
    })

    console.log('Complete parsing Income Data')
    await climateDataToJson(jsonData.geoData)
    res()



  })
}


async function climateDataToJson(geoData = {}) {
  return new Promise(async (res, rej) => {

    const utilityMonthNameArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'October', 'December']
    const dataTypes = {
      '01': 'Precipitation',
      '02': 'AvgTemp'
    }

    let jsonData = {
      geoData
    }

    // Climate data uses their own 'state code' instead of FIPS code for state. This means that the FIPS code from other data source won't match up
    // To resolve we use a mapping of 'state code' to FIPS which is created below
    const stateCodeToFipsFileStream = fs.createReadStream('/Users/chris_brodhecker/dev/climate-map/data/state-code-to-fips-mapping.csv');
    const stateFipsMapping = {}
    await new Promise((fipsRes, fipsRej) => {
      Papa.parse(stateCodeToFipsFileStream, {
        header: true,
        step: (row) => {
          const stateCode = row.data['STATECODE']
          const fipsCode = row.data['FIPSCODE']
          stateFipsMapping[stateCode] = fipsCode
        },
        complete: () => {
          console.log('all done', stateFipsMapping)
          fipsRes()
        },
        error: (e) => {
          console.log(e)
        }
      })
    })



    // END BUILDING FIPS MAPPING 
    
    const climateDataFileStream = fs.createReadStream('/Users/chris_brodhecker/dev/climate-map/data/climdiv-tmpccy-v1.0.0-20220607.tsv');

    let i = 0
    Papa.parse(climateDataFileStream, {
      delimiter: '  ',
      step: (result, parser) => {
        try {
          i++
          if (i % 100) {
            console.log('Another 100!', i)
          }
          rowData = result.data
          const fullIdentifier = rowData[0]
          const stateCode = fullIdentifier.substring(0,2)
          const countyFipsKey = fullIdentifier.substring(2, 5)
          const elementCode = fullIdentifier.substring(5, 7)
          const year = fullIdentifier.substring(7, 11)
          const climateDataByMonth = rowData.slice(1, 13)
          const properFipsCode = `${stateFipsMapping[stateCode]}${countyFipsKey}`
          if (parseInt(year) > 2020) {


            const dataTypeName = dataTypes[elementCode]
            const allMonths = {}
            utilityMonthNameArray.forEach((monthName, i) => {
              allMonths[monthName] =
              {
                [dataTypeName]: climateDataByMonth[i]
              }

            });

            if (properFipsCode in jsonData.geoData) {
              if ('climateData' in jsonData.geoData[properFipsCode]) {
                jsonData.geoData[properFipsCode]['climateData'] = {
                  ...jsonData.geoData[properFipsCode]['climateData'],
                  [year]: allMonths
                }
              } else {
                jsonData.geoData[properFipsCode]['climateData'] = {
                  [year]: allMonths
                }
                console.log('testing 1')
              }
              // jsonData.geoData[fipsKey] = {
              //   ...jsonData.geoData[fipsKey],
              //   [year]: allMonths
              // }
            } else {
              jsonData.geoData[properFipsCode] = {
                'climateData': {
                  [year]: allMonths
                }
              }
              console.log('testing')
            }
          }
        } catch (e) {
          console.log(e)
          rej(e)
        }
      },
      error: function (e) {
        console.log(e, 'errrror')
        rej()
      },
      complete: function (results) {
        console.log("Finished:");
        console.log(jsonData)
        fs.writeFile('/Users/chris_brodhecker/dev/climate-map/scripts/climateData.json', JSON.stringify(jsonData),
          function (err) {
            if (err) {
              console.log(err);
              rej(err)
            } else {
              console.log('we good?')
              res()
            }
          });
      }
    });

    console.log('cone')

  })
}


combineCountyDataToJSON().then(() => console.log('yay')).catch(e => console.log('errrrr'))

console.log('leaving')

//setInterval(() => console.log('waiting'), 5000)