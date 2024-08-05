import React, { useEffect } from "react";
import "../css/Home.css"
import axios from "axios";


const Home=()=>{
 

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className=''>Book Shop</h1>
        <p className='hero-description'>
          browse the best intersting books you will difentely find what you are
          looking  for
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Home;
