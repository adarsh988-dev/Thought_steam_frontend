import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import CommentPage from './components/CommentPage';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/regis" element={<RegistrationForm />} />
          <Route path="/commentpage/:img_id" element={<CommentPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;