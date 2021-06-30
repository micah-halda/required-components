import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import './App.css';
import ClemsonLogo from './ClemsonHeaders.png';
import DevOrPlannerLogo from './DevOrPlanner.png';
import BuildingImages from './BuildingImages.png';
import Slide1 from './Slide1.js';
import Slide2 from './Slide2.js';
import Slide3 from './Slide3.js';
import Slide4 from './Slide4.js';
import Confirmation from './Confirmation';
import PoweredByHalda from './poweredByHalda.png';

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [currentPg, setCurrentPg] = useState(1);

    const handleNextButtonClick = () => {
      console.log('hit next button func')
      if (currentPg === 1){
        setCurrentPg(2)
      } else if (currentPg === 2){
        setCurrentPg(3)
      } else if (currentPg === 3){
        setCurrentPg(4)
      } else {
        setCurrentPg(5)
      }
    }

    const handleBackButtonClick = () => {
      console.log('hit our back button')
      if (currentPg === 2){
        setCurrentPg(1)
      } else if (currentPg === 3){
        setCurrentPg(2)
      } else if (currentPg === 4){
        setCurrentPg(3)
      } else {
        setCurrentPg(4)
      }
    }
  
    return (
      <>
        <Modal show={true} onHide={handleClose}>
            <div style={{ height: '30px'}}>
              <p>Halda Required Components</p>
            </div>
          <Modal.Body>
            <section id="page-1-content" style={{ display: 'inline-grid'}}>
            </section>
              {currentPg === 1 && <Slide1></Slide1>}
              {currentPg === 2 && <Slide2></Slide2>}
              {currentPg === 3 && <Slide3></Slide3>}
              {currentPg === 4 && <Slide4></Slide4>}
              {currentPg === 5 && <Confirmation></Confirmation>}
              <div>
              <Button id="back-button" variant="primary" style={{ display: currentPg < 2 || currentPg > 4 ? "none" : "block " }} onClick={() => handleBackButtonClick()}>
                Back
              </Button>
              <Button 
                className={currentPg === 4 ? "hh-submit" : null } 
                id={currentPg === 4 ? "submit-button" : "next-button"} 
                variant="primary" 
                style={{ marginRight: currentPg > 4 && '35%'}} 
                onClick={() => handleNextButtonClick()}>
                  {currentPg < 4 && "Next"}
                  {currentPg === 4 && "Submit"}
                  {currentPg === 5 && "Get in touch"}
              </Button>
              </div>
          </Modal.Body>
              <img src={PoweredByHalda} style={{ width: '100px', height: '8px', position: 'absolute', right: '10px', bottom: '5px'}} label="Powered by Halda"/>
        </Modal>
      </>
  );
}

export default App;
