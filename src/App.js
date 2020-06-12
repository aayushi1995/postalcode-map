import React from 'react';

import LocationContainer from './components/LocationContainer/location-container.component';
import './App.scss';

function App() {
  return (
    <div> 
      <div className="maintitle">
        <h2> Search your Postal Code </h2>
      </div>
      {/* Main Container where our App code starts */}
      <LocationContainer/>
    </div>
  );
}

export default App;
