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