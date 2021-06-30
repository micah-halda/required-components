import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css';

const Slide3 = () => {

  var dataObj = window.$data;

  const setSlide3ButtonSelection = (val) => {
    dataObj.q3 = val;
    console.log('what is overall obj after step 3', dataObj)
  }

    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none'}} className="animated fadeInRight">
              <h1 id="section-title">React Bootstrap Form Component</h1>
              <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
              </Form.Group>
            </section>
        </>
    )
}

export default Slide3;