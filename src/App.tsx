import React, { useState } from 'react';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import './App.css'
const App = () => {

  const [id, setId] = useState(1);
  const handleIdChange = () => {
    setId(id + 1)
  }
  return (
    <>
      <div>
        <button onClick={handleIdChange}>Change Flight No.</button>
      </div>
      <div className="App">
        <Launch handleIdChange={handleIdChange} />
        <LaunchDetails id={id} />
      </div>
    </>
  );
}

export default App;