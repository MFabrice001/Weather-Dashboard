import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/search-results');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;