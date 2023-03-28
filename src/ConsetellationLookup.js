import React, { useState } from 'react';
import axios from 'axios';

function ConstellationLookup() {
  const [date, setDate] = useState('');
  const [constellation, setConstellation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=0&lat=0&date=${date}&dim=0.10&api_key=YOUR_API_KEY_HERE`);
    setConstellation(response.data.constellation);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <button type="submit">Lookup</button>
      </form>
      {constellation && (
        <p>The constellation on {date} is {constellation}.</p>
      )}
    </div>
  );
}

export default ConstellationLookup;
