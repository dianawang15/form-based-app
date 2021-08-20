import React, {Component} from 'react';
import marbleLogo from './img/Marble Logos/PNGs/marble-png_analytics.png';
import './App.css';
import '@esri/calcite-components/dist/calcite/calcite.css';
import '@esri/calcite-components/dist/calcite/calcite.js';
import '@esri/calcite-ui-icons';
import FormComponent from './FormComponent';
import VersionComponent from './VersionComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <VersionComponent displaytext="version 13.1.12"/>
          <img src={marbleLogo} className="App-logo" alt="marbleLogo" width="258" height="88" />
          <span className="logo-subtext">Use this form to submit any geoanalytic data to the Marble Analytics discovery team. Thank you for supporting the GeoForm Project!</span>

        </header>
        <FormComponent />
      </div>
    );
  }
}

export default App;
