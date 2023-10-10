import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./Student"
import { TStudent } from './types/TStudent';
import Post from "./Post";
import Photos from "./Photos";
function App() {
  let no:number=10;
  let studentObj:TStudent[]=[
    {
    name:"Venkat",
    isPassed:true,
    no:123
    },
    {
      name:"mani",
      isPassed:true,
      no:121
    },
    {
      name:"manoj",
      isPassed:true,
      no:124,
      marks:[
        {
          sub:'english',
          marks:90
        }   
      ]
    }
  ]
  const splitNameIntoArray = (name:string):string[] =>{
    return name.split("");
  }
  return (
    <div>
      <h1> CRUD app </h1>
       {/* <Student obj={studentObj} name="venkat"/> */}
       <Post/>
       {/* <Photos/> */}
    </div>
  );
}

export default App;
