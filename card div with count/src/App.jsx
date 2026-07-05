import React, { useState } from 'react'
import Card from './Components/card/Card';
import Context from './Components/Context';
import "./App.css";



const App = () => {
   const [count, setCount] = useState(0);
  return (
    <>
      <Context.Provider value={{ count, setCount}}>
        <h2>count: {count}</h2>
        <div className="app-container">
          <Card name="Ben Stokes" email="ben@gmail.com" btnname="click" />
          <Card name="Harry Brook" email="harry@gmail.com" btnname="click" />
          <Card name="Joe Root" email="joe@gmail.com" btnname="click" />
        </div>
      </Context.Provider>
    </>
  );
}

export default App
