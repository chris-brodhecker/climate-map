import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Jyb2RoZWNrZXIiLCJhIjoiY2wzOWNmMGMyMDU4czNicGtucDAzcGs4cyJ9.xodY0W11-lfWVkw9s7Hr_A';



function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const countyLayerName = 'county-mapbox-610v7d'
  const countySourceLayerName = 'county_mapbox-610v7d'
  let currentHoverFeatureID
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/cbrodhecker/cl4ykzd2l000214mmvyadso42',
      center: [lng, lat],
      zoom: zoom
    });



    console.log(map.current)

    console.log(map.current.getLayer('county-mapbox-610v7d'))


    map.current.on('click', (e) => {
      console.log(e)

      const clickedFeatures = map.current.queryRenderedFeatures(e.point)
      console.log('hi:', clickedFeatures)

      console.log(map.current.getLayer('county-mapbox-610v7d'))

      console.log(map.current.getLayer('county-mapbox-610v7dFill'))    })

    map.current.on('mousemove', 'county-mapbox-610v7d', (e) => {
      const hoveredFeatures = map.current.queryRenderedFeatures(e.point, {
        layers: [countyLayerName],
      })

      const featureId = hoveredFeatures[0].id

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
        currentHoverFeatureID = featureId

      }

    })
  });

  function colorMap() {
    console.log('Coloring!', map.current)


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

    let colorHover = '#78e395'
    let otherColor = '#000000'
    let expression = ['match', ['get', 'Id'], 1793]
    // expression.push(1793, '#a81b1b')
    const paint = [
      'case',
      ['boolean', ['feature-state', 'hover'], false], 
      colorHover,
      ['boolean', ['feature-state', 'selected'], false], 
      otherColor,
      
      // This is a different way to do colors. Put all the IDs you need to be a certain color inside the array (34037, 34123)
      // and then the color following
      ['boolean', ['match', ['get', 'Key'], ['34037', '34123'], true, false]], 'blue', // THIS IS WHERE THE 'no-match' result goes. 
      // In this case it goes into another match check
      ['boolean', ['match', ['get', 'Key'], ['42107', '4323'], true, false]], 'green', 
      // And this is a different way to do colors where every key is paired with a color and they all live together
      ['match', ['get', 'Key'], '34037', 'green', '34123', 'orange', 'red'],
    ]

    console.log(paint)
    map.current.setPaintProperty(countyLayerName, 'fill-color', paint)
  }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <input id="txtNumber"></input>
      <div onClick={() => colorMap()} className='btnMain'>Color Map</div>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
