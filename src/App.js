import './App.css';
import AstronomyPicture from './AstronomyPicture';
import CloudCover from './CloudCover';
import SolarActivityData from './SolarActivityData';
import SatelliteImagery from './SatelliteImagery';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListLocationComponent from "./components/ListLocationComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateLocationComponent from "./components/CreateLocationComponent";
import ViewLocationComponent from "./components/ViewLocationComponent";

 function NavScrollExample() {
   return (
     <>
       <Container>
         <div
           className="App"
           style={{
             display: "flex",
             flexDirection: "column",
             minHeight: "100vh",
           }}
         >
           <Router>
             <HeaderComponent />
             <div>
               <CloudCover />
               <AstronomyPicture />
               <SatelliteImagery />
               <SolarActivityData />
             </div>
             <div className="container" style={{ flex: 1 }}>
               <Routes>
                 <Route path="/" element={<ListLocationComponent />} index />
                 <Route path="/locations" element={<ListLocationComponent />} />
                 <Route
                   path="/add-location/:id"
                   element={<CreateLocationComponent />}
                 />
                 <Route
                   path="/view-location/:id"
                   element={<ViewLocationComponent />}
                 />
                 {/* <Route path = "/update-location/:id" element = {<UpdateLocationComponent />} /> */}
               </Routes>
             </div>
             <FooterComponent />
           </Router>
         </div>
       </Container>
     </>
   );
 }

export default NavScrollExample;
