import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

   
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      const { storedEmail, storedPassword } = JSON.parse(storedCredentials);
      if (email === storedEmail && password === storedPassword) {
        
        localStorage.setItem('isLoggedIn', true);
        navigate('/dashboard'); // Replace '/dashboard' with your desired route
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('User not found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form fields */}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;