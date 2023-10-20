import React, { useCallback, useEffect } from 'react';
import './index.css';
function ChildComponent(props:any) {

  const getData = useCallback(()=>{
    console.log("child Component GetData func");
    fetch('url').then((res)=> res.json()).then((res)=>{
      console.log(res);
    })
    return '';
  },[props.name]);

  useEffect(()=>{
    getData();         
  },[getData]);

  return (
    <div className="App">
     
    </div>
  );
}

export default ChildComponent;
