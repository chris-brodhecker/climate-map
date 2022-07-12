import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Papa from 'papaparse';
import GeneralDropdown from './Components/Dropdowns/generalDropdown';
import { Months, ClimateScenarios } from './constants/metrics'
import { TemperatureBucketRanges } from './constants/temperatureRanges';
import Legend from './Components/Legend';
const countyData = require('./data/county-data.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jyb2RoZWNrZXIiLCJhIjoiY2wzOWNmMGMyMDU4czNicGtucDAzcGs4cyJ9.xodY0W11-lfWVkw9s7Hr_A';



function App() {
  // This is a useful reference:
  // http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html


  const temperatureArrayTemplate = {}
  TemperatureBucketRanges.forEach(range => {
    temperatureArrayTemplate[range.Name] = ['PLACEHOLDER']
  })


  let countyTemperatureData = {}
  let scenarioTempChange = (temp) => (temp * 1)
  let changeAmount = 1
  let currentMonthObject = Months.january

  const countyTemps = {}
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.617358);
  const [lat, setLat] = useState(39.511436595);
  const [zoom, setZoom] = useState(5.2);


  let popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    pointerEvents: false,
  })

  let colorHover = '#78e395'
  let otherColor = '#000000'

  const countyLayerName = 'tl-2020-us-county-01akwr'
  const countySourceLayerName = 'tl_2020_us_county-01akwr'
  let currentHoverFeatureID
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/cbrodhecker/cl4ykzd2l000214mmvyadso42',
      center: [lng, lat],
      zoom: zoom,
      projection: 'mercator'
    });


    map.current.on('load', () => {
      loadMonthlyMetricsToMap(currentMonthObject)




    })
    // Because these layers and sources exist in MapBox studio we don't need to add them again
    // However - it might make things a little easier to do so because you can control the names and such
    // For instance the 'source' value from mapbox studio is 'composite' which is a bit odd
    // map.current.addSource('countySource', {
    //   type: 'vector',
    //   url: 'mapbox://cbrodhecker.02dt0vtg'
    //   });


    // map.current.addLayer({
    //   id: countyLayerName,
    //   type: 'fill',
    //   source: 'countySource',
    //   'source-layer': countySourceLayerName
    // })
    map.current.on('click', (e) => {

      const clickedFeatures = map.current.queryRenderedFeatures(e.point)
      const info = {
        features: clickedFeatures,
        rawEvent: e
      }



      try {
        const countyFeature = clickedFeatures.find((t) => t.sourceLayer == 'tl_2020_us_county-01akwr')
        const geoId = countyFeature.properties.GEOID
        console.log('Click Info:', info, countyTemperatureData["08069"])

        const theHtml = `<div>${countyFeature.properties.NAMELSAD}
        <p>Avg Temperature: ${countyTemperatureData[geoId]}</p>
      </div>`
        popup
          .setLngLat(e.lngLat)
          .setHTML(theHtml)
          .addTo(map.current)
      } catch (e) {
        console.log(e)
      }


    })

    map.current.on('mousemove', countyLayerName, (e) => {
      const hoveredFeatures = map.current.queryRenderedFeatures(e.point, {
        layers: [countyLayerName],
      })

      const featureId = hoveredFeatures[0].Id
      const geoID = hoveredFeatures[0].properties.GEOID


      if (featureId != currentHoverFeatureID) {
        const newFeatureStateParams = { source: 'composite', sourceLayer: countySourceLayerName, id: featureId }
        const oldFeatureStateParams = { source: 'composite', sourceLayer: countySourceLayerName, id: currentHoverFeatureID }


        map.current.setFeatureState(newFeatureStateParams,
          { selected: true })

        if (currentHoverFeatureID) {
          map.current.setFeatureState(oldFeatureStateParams,
            { selected: false })
        }
        console.log('New Feature:', hoveredFeatures[0].properties.Name)
        // if (!alreadyAdded.includes(featureId)) {
        //   countyTemps.push()
        // }
        countyTemps[geoID] = Math.floor(Math.random() * 100) + 1
        currentHoverFeatureID = featureId

      }

    })
  });

  function colorMapWithTemps() {
    // #### CREATE OUT FILL EXPRESSION ####

    const temperatureColorArrays = structuredClone(temperatureArrayTemplate)


    Object.keys(countyTemperatureData).forEach(countyKey => {
      const temperature = countyTemperatureData[countyKey]
      const bucketOutcomeArray = TemperatureBucketRanges.filter(rangeDetail => {
        const range = rangeDetail.Range
        return temperature >= range[0] && temperature <= range[1]
      });
      if (bucketOutcomeArray.length < 1) {
        console.error('No Bucket found for county and temperature:', { countyKey, temperature })
        // throw new Error('No buckets found for county temperature')
      } else {
        const bucketName = bucketOutcomeArray[0].Name
        temperatureColorArrays[bucketName].push(countyKey)
      }
    });


    const paintExpression = [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      colorHover,
      ['boolean', ['feature-state', 'selected'], false],
      otherColor,
    ]
    const constructColoringRanges = () => {

      // const matchExpression = ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range2, true, false]], 'lightblue',

      TemperatureBucketRanges.forEach((bucketDetail, i, array) => {
        const matchExpression = ['match', ['get', 'GEOID']]
        matchExpression.push(temperatureColorArrays[bucketDetail.Name])
        matchExpression.push(true)
        matchExpression.push(false)
        const finalExpression = ['boolean', matchExpression]
        paintExpression.push(finalExpression)
        paintExpression.push(bucketDetail.Color)
        if (i === array.length - 1) {
          // Add the default color at the end
          paintExpression.push('white')
        }
      })
    }
    constructColoringRanges()



    // No longer used but useful to put into documentation as these MapBox fill expressions are really confusing
    const paint = [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      colorHover,
      ['boolean', ['feature-state', 'selected'], false],
      otherColor,

      // This is a different way to do colors. Put all the IDs you need to be a certain color inside the array (34037, 34123)
      // and then the color following
      ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range8, true, false]], 'blue', // THIS IS WHERE THE 'no-match' result goes. 
      // In this case it goes into another match check
      ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range9, true, false]], 'lightblue',
      ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range10, true, false]], '#FF7F7F',
      // ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range4, true, false]], 'red',
      // ['boolean', ['match', ['get', 'GEOID'], temperatureColorArrays.range5, true, false]], 'orange',
      'yellow'
      // And this is a different way to do colors where every key is paired with a color and they all live together
      // ['match', ['get', 'Key'], '34037', 'green', '34123', 'orange', 'red'],
    ]

    console.log('PAINT', paint)
    map.current.setPaintProperty(countyLayerName, 'fill-color', paintExpression)
  }


  function updateClimateScenario(scenario) {
    console.log(scenario)
    scenarioTempChange = scenario.tempChange
    changeAmount = scenario.changeAmount
    loadMonthlyMetricsToMap(currentMonthObject)
  }

  function loadMonthlyMetricsToMap(monthObject) {
    currentMonthObject = monthObject
    const newTempData = {}
    Object.keys(countyData).forEach(geoId => {
      const geoData = countyData[geoId]
      // if (geoId === '08017') {
      //   console.log(geoData)
      // }

      // if ('TotalHouseholdIncome' in geoData)
      //   console.log(geoData.TotalHouseholdIncome)

      if ('climateData' in geoData) {
        const temperature = scenarioTempChange(geoData.climateData['2021'][monthObject.name].AvgTemp, changeAmount)
        newTempData[geoData.KEY] = temperature
      } else {
        console.error('Missing climate data for:', geoId)
      }

    })

    countyTemperatureData = newTempData
    colorMapWithTemps()
  }

  return (
    <div>
      <div className='headerContainer'>
        <div className="leftLogo">Climate Map</div>

        <div className='vertical-line'></div>
        <div className='tenantName'>Acme Insurance Comapny</div>
        <div className='rightSideHeader'>
          <div className='grey-vertical-line'></div>
          <div>Log Out</div>
        </div>
      </div>
      <div className='mapWrapper'>
        <div ref={mapContainer} className="map-container">
          <div className='dropDownContainer'>
            <GeneralDropdown
              infoObject={Months}
              actionOnChange={(month) => {
                loadMonthlyMetricsToMap(month)
              }}
              initialLabel={Months.january.display}
              width="257px"

            />
            <GeneralDropdown
              infoObject={ClimateScenarios}
              actionOnChange={(climateScenario) => {
                updateClimateScenario(climateScenario)
              }}
              initialLabel={ClimateScenarios.scenario0.display}
              width="257px"

            />
          </div>

          <Legend></Legend>

        </div>
      </div>

      {/* <input id="txtNumber"></input>
      <div className='buttonHolder'>
        <div onClick={() => outputRandomTemps()} className='btnMain'>Output Temps</div>
        <div onClick={() => colorRandomTemps()} className='btnMain'>Generate New Temps</div>
        <div onClick={() => loadMonthlyMetricsToMap()} className='btnMain'>Load from CSV</div>
      </div>
      <textarea id='txtOutput'></textarea> */}
    </div>
  );
}

export default App;
