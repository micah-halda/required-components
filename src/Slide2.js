import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import './App.css';

const Slide2 = () => {

  var dataObj = window.$data;

  console.log('what is our object on step 2', dataObj)

  // const setSlide2ButtonSelection = (val) => {
  //   dataObj.q2 = val;
  //   console.log('what is data obj after step 2', dataObj)
  // }

  const config = {
    show: false,
  }


    return (
        <>
            <section style={{ float: 'right', width: '250px', marginRight: '30px', background: 'none'}} className="animated fadeInRight">
              <h1 id="section-title">React Bootstrap Dropdown Component</h1>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="ROI">ROI</Dropdown.Item>
                  <Dropdown.Item href="Community">Community</Dropdown.Item>
                  <Dropdown.Item href="Design and Details">Design and Details</Dropdown.Item>
                  <Dropdown.Item href="Longevity">Longevity</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </section>
        </>
    )
}

export default Slide2;