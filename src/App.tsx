import React, { useState, useCallback } from 'react';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import './App.css'
const App = () => {

  const [id, setId] = useState(20);
  const hanndleIdChange = useCallback(newId => {
    setId(newId)
  }, []);
  return (
    <div className="App">
      <Launch handleIdChange={hanndleIdChange} />
      <LaunchDetails id={id} />
    </div>
  );
}

export default App;