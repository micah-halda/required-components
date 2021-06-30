import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ROI from './ROI.png';
import Community from './Community.png';
import DnD from './DnD.png';
import Longevity from './Longevity.png';

const Slide2 = () => {
    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none'}}>
            <h1 id="section-title">What excites yoiu about property development?</h1>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={ROI} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">ROI</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Community} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Community</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={DnD} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Design & Details</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Longevity} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Longevity</span>
              </Button>
            </section>
        </>
    )
}

export default Slide2;