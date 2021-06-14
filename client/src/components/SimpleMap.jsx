import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'

const key = 'AIzaSyDHH8TkMkdBnTR0wI5lUaeuoLKpAQ_QkQU';

export default function SimpleMap (props) {

  console.log("INSIDE SIMPLE MAP", props)
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
console.log("THIS IS COORDS FROM SIMPLE MAP",coords)
  // const componentWillReceiveProps = (nextProps) => {
  //   this.setState({
  //     lat: nextProps.lat,
  //     lng: nextProps.lng,
  //   });
  // };

    const handleApiLoaded = (map, maps) => {
    };
    
    return (

      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={props.center}
          defaultZoom={coords.zoom}
          yesIWantToUseGoogleMapApiInternals = {true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={getMapOptions}
        >
        </GoogleMapReact>
      </div>
    );
}
