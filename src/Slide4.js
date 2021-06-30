import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

const Slide4 = () => {

    var dataObj = window.$data;

    const setConfirmationInputSelection = (id, value) => {
        if (id === 'firstname'){
            dataObj.FirstName = value;
            console.log('whats our data obj after slide 4 - firstname', dataObj)
        } else if (id === 'lastname'){
            dataObj.LastName = value;
            console.log('whats our data after slide4 - lastname', dataObj)
        } else if (id === "email"){
            dataObj.Email = value;
            console.log('whast our data obj after slide 4 - email', dataObj)
        } else {
            return;
        }
    }

    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none'}} className="animated fadeInRight">
                <h1 id="section-title">Submit your answers to see if you're a good fit.</h1>
                <input className="slide4-input" placeholder="First Name" id="firstname" onChange={(e) => setConfirmationInputSelection(e.target.id, e.target.value)}/>
                <input className="slide4-input" placeholder="Last Name" id="lastname" onChange={(e) => setConfirmationInputSelection(e.target.id, e.target.value)}/>
                <input className="slide4-input" placeholder="Email" id="email" onChange={(e) => setConfirmationInputSelection(e.target.id, e.target.value)}/>
            </section>
        </>
    )
}

export default Slide4;