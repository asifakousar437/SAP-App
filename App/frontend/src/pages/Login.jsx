// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/dummyApi';
// import '../styles/main.css';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     try {
//       const result = login(username, password);
//       localStorage.setItem('token', result.token);
//       navigate('/dashboard');
//     } catch (err) {
//       alert('Login failed: ' + err.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 style={{ textAlign: 'center' }}>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store a dummy token to simulate login
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <button onClick={handleLogin}>Go to Dashboard</button>
    </div>
  );
}
