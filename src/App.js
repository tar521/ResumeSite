import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './Navbar';
import { Container, Grid } from '@material-ui/core'

import Profile from './components/profile/Profile'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <>
    //   <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/careers" element={<Careers />} />
    //     </Routes>
    // </>
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} lg={3} md={4} style={{backgroundColor: 'blue'}}>
          <Profile />
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Header />
          <Router>
            <Routes>
              <Route path = '/portfolio' element={<Portfolio />}/>
              <Route path="/" element={<Resume />}/>
            </Routes>
          </Router>
          
          
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
