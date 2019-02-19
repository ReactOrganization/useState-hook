import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Func />
      </div>
    );
  }
}

const Func = () => {
  const [number, addFunc] = useState(1)
  const [state, switchFunc] = useState(true)
  return ( 
    <div>
      <p>hi</p> 
      <button onClick={() => addFunc(() => number + 1)}>add one</button>
      <p>number changed with useState hook: {number}</p>
      <br/>
      <button onClick={() => switchFunc((state) => !state)}>{state ? 'hide' : 'show'}</button>
      <p>{state ? <p>here</p> : null}</p>
    </div>
  )
}

export default App;
