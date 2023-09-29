import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import CopyRight from "../Footer/CopyRight"
import TrainingCard from "../TrainingCard";
import CourseCard from '../CourseCard';
import trainingtypes from "../Constants"
import ImgComp from '../ImgComp';
function App() {
  let no:number=11110; 
  return (
    <div className="App">
      {/* <Header no={no}/>
        <h1> app componens </h1>
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
      <ImgComp text="welcome to react"/>
      <ImgComp text="welcome to ashok it"/>
     </div>
  );
}

export default App;
