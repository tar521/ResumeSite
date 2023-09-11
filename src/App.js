import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import NavbarCust from "./components/NavbarCust";
import Card from 'react-bootstrap/Card';
import Image from "./headshot.png"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

function App() {
  return (
    <>
    
      
      <NavbarCust/>
      <Container className="justify-content-start">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={Image} />
             <Card.Body>
              <Card.Title>Tristram Reed</Card.Title>
              <Card.Text>
                Java Developer, Full Stack Developer, excited to utilize Java,
                MySQL, Spring Boot, and React technologies in the industry!
              </Card.Text>
              <a href="src/Tristram-Reed-Resume.pdf" download>
                <button>Download Resume</button>
                </a>
            </Card.Body>
        
            </Card>
          </Col>
          <Col xs={9}>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <AccordionItem eventKey="0">
                <AccordionHeader>Noteable Projects</AccordionHeader>
              </AccordionItem>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Studio Waitlist Retriever</Accordion.Header>
                <Accordion.Body>{`Personal/employee tool to view and render waitlisted clients (Spring Boot, Python, React, MySQL). Consumed company API to compile a list of waitlisted clients who need to be contacted. Provided logic to sift clients by location and determine if they need to be dropped from list.`}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0">
                <Accordion.Header>TV Show Tracker</Accordion.Header>
                <Accordion.Body>
                Application that tracks a user's “watchlist” (Java, JDBC, MySQL). Implemented MySQL to better track database shows and authenticate users. Allows a user to add shows to watchlist, update progress, remove and see their shows.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        
        </Container>
      <Container className="justify-content-center">
        
      
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <AccordionItem eventKey="0">
                <AccordionHeader>Experience</AccordionHeader>
              </AccordionItem>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cognixia - Jersey City, NJ | | Apr 2022 - Present</Accordion.Header>
        <Accordion.Body>
        | Full-Stack Java Developer: | Cognixia’s JUMP program is a hyper-intense technical training program that gives top STEM talent from across the U.S. the equivalent of 12-18 months of industry experience. Not only do they up-skill their technical abilities, they also evolve their digital mindset to successfully adapt and utilize technology in an efficient manner so they can JUMP start their careers via deployment with Collabera clients.  Design Flexibility – experience with DAO and DTO design patterns, JDBC, JPA and Hibernate for interfacing with Data Persistence
 Database Proficiency - in RDBMS MySQL as well as NoSQL with MongoDB  Collaborative Development – used Git CLI and GitHub under AGILE Methodology with teammates to develop a Full Stack Application 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>LexisNexis RSG - Atlanta, Georgia || Aug 2022 - July 2023</Accordion.Header>
        <Accordion.Body>
        | Java Developer – Software Engineer: |  Converted legacy on-prem Spring MVC codebase to cloud microservices with Spring Boot.  Deployed microservices through helm, docker, and AKS via Github runners.  Collaborated with other teams to ensure their consumption of services met QA standards.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </Container>
    <Container className="justify-content-center">
        
        
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <AccordionItem eventKey="0">
                <AccordionHeader>Education</AccordionHeader>
              </AccordionItem>
      <Accordion.Item eventKey="0">
        
        <Accordion.Header>Texas State University - San Marcos, TX</Accordion.Header>
        <Accordion.Body>
          Completed a Bachelor of Applied Mathematics, 3.8 GPA and a Minor in Computer Science. Was a recipient of the Dean's List each semester.
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
    
    </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  );
}

export default App;
