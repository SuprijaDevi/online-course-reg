import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (res.data === 'exist') {
        navigate('/home', { state: { id: email } });
      } else if (res.data === 'notexist') {
        alert('User have not signed up');
      }
    } catch (e) {
      alert('Wrong details');
      console.log(e);
    } 
};


  return (
    <main>
      <div className="signin-container">
        <div className="signup-container1">
         <h2>Login</h2>
         <form className="signup-form" onSubmit={submit}>
           <div className="input-group">
             <label htmlFor="email">Email:</label>
             <input
              type="email"
              id="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           </div>
           <div className="input-group">
             <label htmlFor="password">Password:</label>
             <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
         <p>
           Don't have an account? <Link to="/Signup">Sign Up</Link>
         </p>
       </div>
     </div>
    </main>
  );
}
export default Login;