import React from 'react'
import RightBanner from '../components/RightBanner'
import LeftBanner from '../components/LeftBanner'
import Container from "react-bootstrap/Container"

const Home = () => {
  return (
    <><Container className="justify-content-center">
    
      <LeftBanner />
      <RightBanner />
    
    </Container>
    </>
  )
}

export default Home