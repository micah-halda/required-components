import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Apartment from './Apartment.png';
import Park from './Park.png';
import Business from './Business.png';
import Garden from './Garden.png';

const Slide1 = () => {
    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none'}}>
            <h1 id="section-title">What would you want to develop on a vacant city lot?</h1>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Apartment} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Apartments</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Park} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Park/Playground</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Business} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Business</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Garden} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Community Garden</span>
              </Button>
            </section>
        </>
    )
}

export default Slide1;