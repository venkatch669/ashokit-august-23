import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';

function CourseSubCard(props:any) {
  console.log(props);
  const [duration, setDuration]= useState(props.duration);
  const [showPrice, setShowPrice]= useState(true);
  const [faculty, setFaculty] = useState({name:"venkat",techStack:"UI", fee:"", location:""})
  const getEvent = (event:any) =>{
    console.log(event);
    setDuration("4 months");
    // alert("approach-3")
  }
  const hidePriceFun = (event:any) =>{
    console.log(event.target.checked); // false
    setShowPrice(event.target.checked); // false
    console.log("welcome"); // welcome 
    console.log(showPrice); // it supposed to false // true 
  }
  const changeName = () =>{
    setFaculty({...faculty, name:"ashok"})
  }
  return (
    <div>
        <img src={props.imgPath}/>
        <p>duration : {duration} <button onClick={getEvent}> change the duration </button></p>
        <p>price : { showPrice ? props.price : "***" } 
        <input type="checkbox" checked={showPrice} onChange={hidePriceFun}/> show the price</p>
        <p>name: {faculty.name}</p>
        <p>Technology: {faculty.techStack}</p>
        <input type="text" onChange={(e)=>{
           setFaculty({...faculty, name:e.target.value})
        }}/>
        <button onClick={changeName}> change the name </button>
        {/* condition ? true : false  */}
    </div>
  );
}

export default CourseSubCard;