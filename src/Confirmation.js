import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ROI from './ROI.png';
import Community from './Community.png';
import DnD from './DnD.png';
import Longevity from './Longevity.png';

const Confirmation = () => {
    return (
        <>
            <section style={{ float: 'right', width: '250px', background: 'none'}}>
            <h3>Thank you, name</h3>
            <p>It looks like you could be a great fit for MRED!</p>

            <p>Take the next step and get in touch with our program director!</p>
            </section>
        </>
    )
}

export default Confirmation;