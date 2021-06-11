import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import useApplicationData from '../hooks/useApplicationData'


const key = 'AIzaSyDHH8TkMkdBnTR0wI5lUaeuoLKpAQ_QkQU';

// class SimpleMap extends Component {
export default function SimpleMap (props) {
  const { state, dispatch } = useApplicationData();
  const markerName = state.extburgers.map(burger => burger.name)
  console.log("markerName", markerName)
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };


  const [coords, setCoords] = useState({
    center: props.center || [
      23.045280, 
      -109.692219
    ],
    zoom: 18
  })
  // render() {
    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };
    
    
    return (

      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={coords.center}
          defaultZoom={coords.zoom}
          yesIWantToUseGoogleMapApiInternals = {true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={getMapOptions}
        >
          <Marker
            lat={coords.center[0]}
            lng={coords.center[1]}

          /> 

        </GoogleMapReact>
      </div>
    );
  // }

}
// export default SimpleMap