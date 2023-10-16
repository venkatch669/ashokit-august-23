import React from 'react';
// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {updateName} from "../features/counter/nameSlice";
function NameComponent() {
  const name = useSelector((state:{name:{val:string}})=> state.name.val);
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch();
  const updateFun =(value:string)=>{
     dispatch(updateName(value))
  }
  return (
    <div className="App">
        <button onClick={()=>{
          updateFun("venkat")
        }}>UpdateMyName to Venkat </button>
        <h1> {name}  - {count}</h1>
    </div>
  );
}

export default NameComponent;
