import React from 'react'
import Head from './Head';
import Footer from './Container/Footer';
const Videos = () => {
  return (
    <div>
      <center>
      <Head/>
      <iframe width="100%" height="700px" src="https://www.youtube.com/embed/GXB-qALGOu4"   allow="accelerometer;    " allowfullscreen></iframe>
    <Footer/>
    </center>
    </div>
  )
}

export default Videos
