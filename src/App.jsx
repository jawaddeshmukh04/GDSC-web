//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';




function App() {
  return (
    <>
    
    <div className="App">
      
      <Navbar/>
      <Home/>
      <About/>
      
    </div>
    </>
  );
}

export default App;
