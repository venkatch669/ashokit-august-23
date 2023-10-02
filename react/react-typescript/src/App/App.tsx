import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import CopyRight from "../Footer/CopyRight"
import TrainingCard from "../TrainingCard";
import CourseCard from '../CourseCard';
import trainingtypes from "../Constants"
import ImgComp from '../ImgComp';
import ImgCompFun from "../ImgCompFunc";
import ErrorBoundary from "../ErrorBoundary"

function App() {
  let no:number=11110; 
  const [hide, setHide] = useState(false);
  const [text, setText] = useState("welcome to react");
  const changeFun = (name:any) =>{
    console.log(name);
    setText(name);
  }
  return (
    <div className="App">
          
        
          {/* <ErrorBoundary>  */}
            <Header courseTitle={"React Course"}/>
          {/* </ErrorBoundary>  */}
          <ErrorBoundary> 
            <>
              <button onClick={()=> setHide(!hide)}> toggle ImgComp</button>
              {hide ? <ImgCompFun text={text} changeName={changeFun}/> : null}
            </>
          </ErrorBoundary>

             {/*  <h1> app componens </h1>
      <Footer/>
      <CopyRight/> */}
      {/* 25-9-23 : session */}
      {/* <div className='container'>
        <div className="row">
          {trainingtypes.map((e:any)=>
            <div className="col4">
              <TrainingCard 
              imgpath={e.imgpath}
              title={e.title} 
              color={e.color}/>        
            </div>
          )}
        </div>
      </div> */}
      {/* <div className='container'>
        <CourseCard/>      
      </div> */}


     </div>
  );
}

export default App;
