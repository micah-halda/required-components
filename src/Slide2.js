import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ROI from './ROI.png';
import Community from './Community.png';
import DnD from './DnD.png';
import Longevity from './Longevity.png';
import Typist from 'react-typist';

const Slide2 = () => {

  var dataObj = window.$data;

  console.log('what is our object on step 2', dataObj)

  const setSlide2ButtonSelection = (val) => {
    dataObj.q2 = val;
    console.log('what is data obj after step 2', dataObj)
  }

  const config = {
    show: false,
  }


    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none'}} className="animated fadeInRight">
            <Typist cursor={config} startDelay={2000}>
              <h1 id="section-title">What excites you about property development?</h1>
            </Typist>
              <Button style={{ width: '90px', height: '90px'}} onClick={() => setSlide2ButtonSelection("ROI")}>
                <img src={ROI} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">ROI</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Community} style={{ width: '50px', height: '50px'}} onClick={() => setSlide2ButtonSelection("Community")}/>
                <span id="image-text">Community</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={DnD} style={{ width: '50px', height: '50px'}} onClick={() => setSlide2ButtonSelection("Design & Details")}/>
                <span id="image-text">Design & Details</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Longevity} style={{ width: '50px', height: '50px'}} onClick={() => setSlide2ButtonSelection("Longevity")}/>
                <span id="image-text">Longevity</span>
              </Button>
            </section>
        </>
    )
}

export default Slide2;