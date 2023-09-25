import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import CopyRight from "../Footer/CopyRight"
import TrainingCard from "../TrainingCard"
function App() {
  let no:number=11110;
  const trainingtypes =   [
    {
      imgpath:"https://www.ashokitech.com/assets/frontend/images/classroom-training.png", 
      title:"online training",  
      color:"green"
    },
    {
      imgpath:"https://www.ashokitech.com/assets/frontend/images/corporate-training.png", 
      title:"coporate training",
      color:"#fc7e14"
    },
    {
      imgpath:"https://www.ashokitech.com/assets/frontend/images/on-campus-training.png",
      title:"classroom training",
      color:"#4588c0"
    },
    {
      imgpath:"https://www.ashokitech.com/assets/frontend/images/conference.png",
      title:"Weekend Workshops",
      color:"#8764c2"
    }
  ]
  
  return (
    <div className="App">
      {/* <Header no={no}/>
        <h1> app componens </h1>
      <Footer/>
      <CopyRight/> */}
      {trainingtypes.map((e:any)=>
        <TrainingCard 
        imgpath={e.imgpath}
        title={e.title} 
        color={e.color}/>        
      )}

     </div>
  );
}

export default App;
