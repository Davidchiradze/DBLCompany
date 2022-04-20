import React from 'react';
import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Offers from './Components/Offers';
import Services from './Components/Services';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Features/>
    <Offers/>
    <Services/>
    </React.Fragment>

  );
}

export default App;
