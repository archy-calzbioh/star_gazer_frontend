import './App.css';
import AstronomyPicture from './AstronomyPicture';
import CloudCover from './CloudCover';
import SolarActivityData from './SolarActivityData';
import SatelliteImagery from './SatelliteImagery';
import ConstellationLookup from './ConsetellationLookup';



function NASAInfo() {
  return (
    <div>
 
    <CloudCover />
      <ConstellationLookup />
      <AstronomyPicture />
      <SatelliteImagery />
      <SolarActivityData />

      
    </div>
  );
}

export default NASAInfo;