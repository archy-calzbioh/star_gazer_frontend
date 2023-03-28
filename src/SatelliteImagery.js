import React, { useState, useEffect } from 'react';

function SatelliteImagery() {
  const [imagery, setImagery] = useState([]);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/earth/assets?lon=YOUR_LONGITUDE_HERE&lat=YOUR_LATITUDE_HERE&date=YYYY-MM-DD&dim=0.10&api_key=YOUR_API_KEY_HERE')
      .then(response => response.json())
      .then(data => setImagery(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Satellite Imagery</h2>
      {imagery.length > 0 && (
        <img src={imagery[0].url} alt="Satellite Imagery" />
      )}
    </div>
  );
}

export default SatelliteImagery;