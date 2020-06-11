import React from 'react';

import './App.css';
import { withScriptjs } from "react-google-maps";




import  Map from './Map';

function Appdir() {

  const MapLoader = withScriptjs(Map);

  return (

<div className="App">
  <header className="App-header">
    

  </header>
  <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?&key=AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
  />
</div>
  );
}

export default Appdir;