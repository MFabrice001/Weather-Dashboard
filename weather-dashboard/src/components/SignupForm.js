import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem('credentials', JSON.stringify({ email, password }));
    alert('Signup successful');
    navigate('/login');
  };

  
}

export default SignupForm;