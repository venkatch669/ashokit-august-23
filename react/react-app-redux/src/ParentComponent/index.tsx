import React, { useRef, useState } from 'react';
import './index.css';
import ChildComponent from '../ChildComponent';
function ParentComponent() {
  let [count, setCounter] = useState(0);
  let [name, setName] = useState('venkat');
  const btn:any=useRef(null);

  const increaseCounter = () =>{
      const _counter = count++;
      setCounter(_counter);
  }
  const changeName = () =>{  
    setName(name=='venkat'?'manoj':'venkat');
}

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>increaseCounter()} ref={btn}> increase </button>
      <button onClick={()=>changeName()}> change Name</button>
      <button onClick={()=>{
          btn.current.innerText="Venkat";
      }}> setFocus</button>
      <ChildComponent name={name}/>
    </div>
  );
}

export default ParentComponent;
