import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Home from './pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
