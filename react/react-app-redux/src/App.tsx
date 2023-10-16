import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice';
import { RootState } from './app/store';
import NameComponent from './NameComponent';
function App() {
  const count = useSelector((state: any) => state.counter.value)
  // const userData = useSelector((state: any) => state.userVenkat.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1> Redux </h1>
      <div className="border">
        <h2> component -1 </h2>
        <NameComponent />
      </div>
      <div className="border">
        <h2> component -2 </h2>
        <h1> counter - {count}</h1>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
