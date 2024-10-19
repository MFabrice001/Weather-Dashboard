import React from 'react';

const SignUpForms = () => {
  return (
    <div className="signup-forms">
      <div className="signup-form">
        <h2>Sign Up for Facebook</h2>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      {/* Add Instagram and other sign-up forms similarly */}
    </div>
  );
};

export default SignUpForms;
