  // This is a useful reference:
  // http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html
 
  export const TemperatureBucketRanges = [
    {
      Name: 'range1',
      Range: [-1000, 10],
      Color: '#0500ff'
    }, {
      Name: 'range2',
      Range: [10, 20],
      Color: '#0022ff'
    }, {
      Name: 'range3',
      Range: [20, 30],
      Color: '#00c4ff'
    }, {
      Name: 'range4',
      Range: [30, 40],
      Color: '#00ff83'
    }, {
      Name: 'range5',
      Range: [40, 50],
      Color: '#00ff10'
    }, {
      Name: 'range6',
      Range: [50, 60],
      Color: '#fdff00'
    }, {
      Name: 'range7',
      Range: [60, 70],
      Color: '#FFbe00'
    },
    {
      Name: 'range8',
      Range: [70, 80],
      Color: '#FF8c00'
    }, {
      Name: 'range9',
      Range: [80, 90],
      Color: '#FF4600'
    }, {
      Name: 'range10',
      Range: [90, 1000],
      Color: '#FF00C0'
    }
  ];