import React, { useState } from 'react';
import './index.css';
import Spinner from 'react-bootstrap/Spinner';

function SpinnerComp() {  
  return (
    <div className="spinner">
       <Spinner animation="border" />
    </div>
  );
}

export default SpinnerComp;
