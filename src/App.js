import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      if (!username || !password) {
          setMessage("Both fields are required!");
      } else if (username === "user" && password === "password") {
          setMessage("Welcome, user!");
      } else {
          setMessage("Invalid username or password");
      }
  };

  return (
      <div className="login-container">
        <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

              <button type="submit">Submit</button>
              {message && <p className="message">{message}</p>}
          </form>
      </div>
  );
}

export default App;
