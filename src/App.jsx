import React from 'react';
import { Header } from './Components/Header/Header.jsx';
import { LaunchesList } from './Components/Launches/Launches.jsx';
import './styles.css';
function App() {
  return (
    <div className="App">
      <Header />
      <LaunchesList />
      
    </div>
  );
}

export default App;
