import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Apartment from './Apartment.png';
import Park from './Park.png';
import Business from './Business.png';
import Garden from './Garden.png';

const Slide1 = () => {

    var dataObj = window.$data;

    const setButtonSelection = (val) => {
      dataObj.q1 = val;
      console.log('what is overall obj after step 1', dataObj)
    }

    const [isRBComponent, setIsRBComponent] = useState(true);

    const toggleVariation = () => {
      setIsRBComponent(!isRBComponent)
    }

    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none' }} className="animated fadeInRight">
              {
                isRBComponent ? 
                <>
              <h1 id="section-title">React Bootstrap Button Component</h1>        
              <Button value="Apartment" style={{ width: '90px', height: '90px'}} onClick={() => setButtonSelection("Apartment")}>
                <img src={Apartment} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Apartments</span>
              </Button>
              <Button value="Park/Playground" style={{ width: '90px', height: '90px'}} onClick={() => setButtonSelection("Park/Playground")}>
                <img src={Park} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Park/Playground</span>
              </Button>
              <Button value="Business" style={{ width: '90px', height: '90px'}} onClick={() => setButtonSelection("Business")}>
                <img src={Business} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Business</span>
              </Button>
              <Button value="Community Garden" style={{ width: '90px', height: '90px'}} onClick={() => setButtonSelection("Community Garden")}>
                <img src={Garden} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Community Garden</span>
              </Button>
                </>
                :
                <>
                  <h1 id="section-title">JSX/HTML button</h1>        
                  <button value="Apartment" style={{ width: '90px', height: '90px', border: '1px solid black'}} onClick={() => setButtonSelection("Apartment")}>
                    <img src={Apartment} style={{ width: '50px', height: '50px'}}/>
                    <span id="image-text">Apartments</span>
                  </button>
                  <button value="Park/Playground" style={{ width: '90px', height: '90px', border: '1px solid black'}} onClick={() => setButtonSelection("Park/Playground")}>
                    <img src={Park} style={{ width: '50px', height: '50px'}}/>
                    <span id="image-text">Park/Playground</span>
                  </button>
                  <button value="Business" style={{ width: '90px', height: '90px', border: '1px solid black'}} onClick={() => setButtonSelection("Business")}>
                    <img src={Business} style={{ width: '50px', height: '50px'}}/>
                    <span id="image-text">Business</span>
                  </button>
                  <button value="Community Garden" style={{ width: '90px', height: '90px', border: '1px solid black'}} onClick={() => setButtonSelection("Community Garden")}>
                    <img src={Garden} style={{ width: '50px', height: '50px'}}/>
                    <span id="image-text">Community Garden</span>
                  </button>
                </>
              }
            </section>
            <button onClick={() => toggleVariation()}>{isRBComponent ? "Toggle for JSX/HTML Button Element" : "Toggle for RB Button Component"}</button>
        </>
    )
}

export default Slide1;