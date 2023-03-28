
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './App.css';
import AstronomyPicture from './AstronomyPicture';
import CloudCover from './CloudCover';
import SolarActivityData from './SolarActivityData';
import SatelliteImagery from './SatelliteImagery';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import axios from "axios";


 function NavScrollExample() {
   return (
     <>
       <div
         className="App"
         style={{
           display: "flex",
           flexDirection: "column",
           minHeight: "100vh",
         }}
       >
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
       <Navbar bg="light" expand="lg">
           <Container fluid>
             <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav
                 className="me-auto my-2 my-lg-0"
                 style={{ maxHeight: "100px" }}
                 navbarScroll
               >
                 <Nav.Link href="#action1">Home</Nav.Link>
                 <Nav.Link href="#action2">Link</Nav.Link>
                 <NavDropdown title="Link" id="navbarScrollingDropdown">
                   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action4">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action5">
                     Something else here
                   </NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="#" disabled>
                   Link
                 </Nav.Link>
               </Nav>
               <Form className="d-flex">
                 <Form.Control
                   type="search"
                   placeholder="Search"
                   className="me-2"
                   aria-label="Search"
                 />
                 <Button variant="outline-success">Search</Button>
               </Form>
             </Navbar.Collapse>
           </Container>
         </Navbar>
         {/* Main section */}
         <main style={{ flex: 1 }}>
           <Container>
             {/* Content goes here */}
             <h1>Welcome to Our Website</h1>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
               nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
               ipsum. Praesent mauris.
             </p>
             {/* More content */}
           </Container>
         </main>

         <MDBFooter
           bgColor="light"
           className="text-center text-lg-start text-muted"
         >
           <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
             <div className="me-5 d-none d-lg-block">
               <span>Get connected with us on social networks:</span>
             </div>

             <div>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="facebook-f" />
               </a>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="twitter" />
               </a>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="google" />
               </a>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="instagram" />
               </a>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="linkedin" />
               </a>
               <a href="" className="me-4 text-reset">
                 <MDBIcon color="secondary" fab icon="github" />
               </a>
             </div>
           </section>

           <section className="">
             <MDBContainer className="text-center text-md-start mt-5">
               <MDBRow className="mt-3">
                 <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                   <h6 className="text-uppercase fw-bold mb-4">
                     <MDBIcon color="secondary" icon="gem" className="me-3" />
                     Company name
                   </h6>
                   <p>
                     Here you can use rows and columns to organize your footer
                     content. Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit.
                   </p>
                 </MDBCol>

                 <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                   <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                   <p>
                     <a href="#!" className="text-reset">
                       Angular
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       React
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       Vue
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       Laravel
                     </a>
                   </p>
                 </MDBCol>

                 <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                   <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                   <p>
                     <a href="#!" className="text-reset">
                       Pricing
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       Settings
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       Orders
                     </a>
                   </p>
                   <p>
                     <a href="#!" className="text-reset">
                       Help
                     </a>
                   </p>
                 </MDBCol>

                 <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                   <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                   <p>
                     <MDBIcon color="secondary" icon="home" className="me-2" />
                     New York, NY 10012, US
                   </p>
                   <p>
                     <MDBIcon
                       color="secondary"
                       icon="envelope"
                       className="me-3"
                     />
                     info@example.com
                   </p>
                   <p>
                     <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                     + 01 234 567 88
                   </p>
                   <p>
                     <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                     + 01 234 567 89
                   </p>
                 </MDBCol>
               </MDBRow>
             </MDBContainer>
           </section>

           <div
             className="text-center p-4"
             style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
           >
             © 2021 Copyright:
             <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
               MDBootstrap.com
             </a>
           </div>
         </MDBFooter>
       </div>
     </>
   );
 }

 export default NavScrollExample;
