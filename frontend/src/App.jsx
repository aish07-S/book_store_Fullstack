import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
// import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    
    <Router> 
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;