import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
// High medium low none
import High from './High.png';
import Medium from './Medium.png';
import Low from './Low.png';
import None from './None.png';

const Slide2 = () => {
    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none'}}>
              <h1 id="section-title">My risk tolerance is:</h1>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={High} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">High</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Medium} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Medium</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={Low} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">Low</span>
              </Button>
              <Button style={{ width: '90px', height: '90px'}}>
                <img src={None} style={{ width: '50px', height: '50px'}}/>
                <span id="image-text">None</span>
              </Button>
            </section>
        </>
    )
}

export default Slide2;