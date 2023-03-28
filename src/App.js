
import React from "react";
import { Container, Button, Alert } from "react-bootstrap";

import './App.css';
import AstronomyPicture from './AstronomyPicture';
import CloudCover from './CloudCover';
import SolarActivityData from './SolarActivityData';
import SatelliteImagery from './SatelliteImagery';

function NASAInfo() {
  return (

    <Container>
    <div>
      <CloudCover />
      <AstronomyPicture />
      <SatelliteImagery />
      <SolarActivityData />
    </div>
      <h1 className="text-center mt-4">React Bootstrap Example</h1>
      <Button variant="primary" className="mt-4">
        Primary Button
      </Button>
      <Alert variant="success" className="mt-4">
        This is a success alert!
      </Alert>
    </Container>

  );
}

export default NASAInfo;
