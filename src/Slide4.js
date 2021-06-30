import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

const Slide4 = () => {
    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none'}}>
                <h1 id="section-title">Submit your answers to see if you're a good fit.</h1>
                <input className="slide4-input" placeholder="First Name"/>
                <input className="slide4-input" placeholder="Last Name"/>
                <input className="slide4-input" placeholder="Email"/>
            </section>
        </>
    )
}

export default Slide4;