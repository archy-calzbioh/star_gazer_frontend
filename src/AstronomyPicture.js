import React, { useState, useEffect } from 'react';

function AstronomyPicture() {
  const [picture, setPicture] = useState({});

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY_HERE')
      .then(response => response.json())
      .then(data => setPicture(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Astronomy Picture of the Day</h2>
      <img src={picture.url} alt={picture.title} />
      <h3>{picture.title}</h3>
      <p>{picture.explanation}</p>
    </div>
  );
}

export default AstronomyPicture;