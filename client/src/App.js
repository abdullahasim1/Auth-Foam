import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './AuthForm';
import HomePage from './Home'; 
import About from './About';
import Contact from './Contact';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />       
        <Route path="/login" element={<AuthForm />} />  
        <Route path="/home" element={<HomePage />} />   
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    </Router>
  );
}

export default App;
