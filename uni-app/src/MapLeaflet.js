// import "./Map.css";
import React, { Component, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";


function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
        // console.log(map.locate());
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        console.log(e.latlng);
      },
    })

    // console.log(position);
  
    return position === null ? null : (
      <Marker position={position} icon={customMarker}>
        <Popup>LAT: {position.lat}
        <br></br>
        LONG: {position.lng}
        </Popup>
      </Marker>
    )
  }
  
  const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0]
  });
  
  export default class MapLeaflet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: 40.4165,
        lng: -3.70256,
        zoom: 13
      };
    }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      console.log(position);
      return (
        <div id="map">
            <h3>Haz click en el mapa!</h3> 
          <MapContainer
             center={{ lat: 40.4165, lng:  -3.70256 }}
              zoom={13}
               scrollWheelZoom={false}>
                  <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
            <LocationMarker />
        </MapContainer>
        </div>
      );
    }
  }
