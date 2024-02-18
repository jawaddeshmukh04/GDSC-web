//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer'
import Faqs from './components/Faqs'
import Review from './components/Review';



function App() {
  return (
    <>
    
    <div className="App">
      
      <Navbar />
      <Home />
      <About />
      <Review />
      <Faqs />
      <Footer />
    </div>
    </>
  );
}

export default App;
