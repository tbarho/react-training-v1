import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';

function Login() {
  const { loggedIn, login, logout } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      Login
      <div>
        {!loggedIn ? (
          <form
            onSubmit={() => {
              if (password === "hello") {
                login(username);
              }
            }}
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value || "")}
              placeholder="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value || "")}
              placeholder="password"
              type="password"
            />
            <button type="submit">Log In</button>
          </form>
        ) : (
          <button onClick={() => logout()}>Log out</button>
        )}
      </div>
    </div>
  );
}

export default Login;