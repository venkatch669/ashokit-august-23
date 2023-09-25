import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './index.css';

function TrainingCard(props:any):ReactElement {
  console.log(props);
  return (
    <div >
      <div className='card' style={{'background':props.color || 'green'}}>   
        <img src={props.imgpath}/>
        <p> {props.title || "lorem ipsum"}</p>
      </div>
    </div>
  );
}

export default TrainingCard;
