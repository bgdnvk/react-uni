// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { Map, Marker, Popup, TileLayer } from "react-leaflet";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './styles.css';



// class App extends Component {
//   state = {
//     center: [51.505, -0.091],
//     zoom: 13,
//   };

//   render() {
//     return (
//       <div>
//         <MapContainer center={this.state.center} zoom={this.state.zoom}>
//           <TileLayer
//             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={this.state.center}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
// import MapLeaflet from "./scripts/MapLeaflet.js";
import MapLeaflet from "./scripts/MapLeaflet.js";
import "./styles/styles.css";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <section className="Apies">
      <main className="main">
        <MapLeaflet />
      </main>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);