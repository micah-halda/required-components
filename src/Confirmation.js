import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ROI from './ROI.png';
import Community from './Community.png';
import DnD from './DnD.png';
import Longevity from './Longevity.png';

const Confirmation = () => {

    var dataObj = window.$data;
    var dataFirstName = dataObj.FirstName;

    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none', marginTop: '50px', marginRight: '25%' }}>
            <h3>Thank you</h3>

            <p>These are the components required at this time</p>

            <p>Please refer to the react-bootstrap documentation here: <br/><a href="https://react-bootstrap.github.io/components/alerts">React Bootstrap</a></p>
            </section>
        </>
    )
}

export default Confirmation;