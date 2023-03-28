import React, { useState, useEffect } from 'react';

function SolarActivityData() {
  const [solarData, setSolarData] = useState([]);

  useEffect(() => {
    fetch('https://api.nasa.gov/DONKI/CME?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&api_key=YOUR_API_KEY_HERE')
      .then(response => response.json())
      .then(data => setSolarData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Solar Activity Data</h2>
      {solarData.length > 0 && (
        <ul>
          {solarData.map((event, index) => (
            <li key={index}>
              <h3>{event.activityID}</h3>
              <p>{event.note}</p>
              <p>Start Time: {event.startTime}</p>
              <p>End Time: {event.endTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SolarActivityData;