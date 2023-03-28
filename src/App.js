import logo from './logo.svg';
import './App.css';
import AstronomyPicture from './AstronomyPicture';
import CloudCover from './CloudCover';
import SolarActivityData from './SolarActivityData';
import SatelliteImagery from './SatelliteImagery';

function NASAInfo() {
  return (
    <div>
      <CloudCover />
      <AstronomyPicture />
      <SatelliteImagery />
      <SolarActivityData />
    </div>
  );
}

export default NASAInfo;
