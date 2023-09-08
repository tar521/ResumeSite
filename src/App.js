import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  return (
    // <div>
    // <Nav fill variant="tabs" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Nav.Link href="/home">Active</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="disabled" disabled>
    //       Disabled
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
    // </div>
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      </Navbar>
      </div>
  );
}

export default App;
