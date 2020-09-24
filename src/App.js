import React from 'react';
import header from './images/bg-header-desktop.svg';
import './App.css';
import JobCard from './components/JobCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="App-logo" alt="header" />
      </header>
      <JobCard 
        logo="./images/photosnap.svg"
        company="Photosnap"
        />
    </div>
  );
}

export default App;
