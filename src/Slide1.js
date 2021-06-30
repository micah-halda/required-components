import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Apartment from './Apartment.png';
import Park from './Park.png';
import Business from './Business.png';
import Garden from './Garden.png';
import Typist from 'react-typist';

const Slide1 = () => {

    var dataObj = window.$data;

    const setButtonSelection = (val) => {
      dataObj.q1 = val;
      console.log('what is overall obj after step 1', dataObj)
    }

    const config = {
      show: false,
    }

    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none' }} className="animated fadeInRight">
            <Typist cursor={config} startDelay={2000}>
              <h1 id="section-title">What would you want to develop on a vacant city lot?</h1>        
            </Typist>
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
            </section>
        </>
    )
}

export default Slide1;