import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Forecast from './components/Forecast';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import InstagramLoginForm from './components/InstagramLoginForm';
import FacebookSignupForm from './components/FacebookSignupForm';
import XSignupForm from './components/XSignupForm';
import InstagramSignupForm from './components/InstagramSignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/instagram-login" element={<InstagramLoginForm />} />
          <Route path="/facebook-signup" element={<FacebookSignupForm />} />
          <Route path="/x-signup" element={<XSignupForm />} />
          <Route path="/instagram-signup" element={<InstagramSignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;