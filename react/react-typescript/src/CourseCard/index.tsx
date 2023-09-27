import React from 'react';
import logo from './logo.svg';
import './index.css';
import CourseSubCard from "../CourseSubCard"

function CourseCard() {
  const obj=[
    {
      imgURL:'https://www.ashokitech.com/uploads/course/spring-boot-microservices-online-training.jpeg',
      duration:"3 Months",
      price:"8000"
    },
    {
      imgURL:'https://www.ashokitech.com/uploads/course/java-realtime-project-online-training.png',
      duration:"2 Months",
      price:"8000"
    }
  ]
  const getAlert = (a:number,b:number) =>{
    console.log(a+b)
    alert("approach-2");
  } // function expression(to solve functional hoisting)

  return (
    <div>
        {obj.map((e)=>{
          return(
            <div className='card'>
              <CourseSubCard price={e.price} imgPath={e.imgURL} duration={e.duration}/>
            </div>)
        })}
    </div>
  );
}

export default CourseCard;

// function with return type 
// function addtwonumbers(a,b){
//     return <div>welcome</div>
// }

// events in javascript
{/* <button onclick="" id="btn"/>
document.getElementById("btn")?.addEventListener(()) */}

// iife 

// (()=>{

// },());