import React, { Component } from "react";
import "./map.css"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map()
{
    return(
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 6.459964, lng: 7.548949 }} 
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps()
{
    return(
        <aside style={{width: "100%", height: "684px"}}>
          <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB0wEYTaNxT8XWvCdSTRyOyXXRlJrlq0sY`} 
            loadingElement={<div style={{height: "684px"}} />}
            containerElement={<div style={{height: "684px"}} />}
            mapElement={<div style={{height: "684px"}} />}
          />
        </aside>
    )   
}

