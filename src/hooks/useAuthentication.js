import { useState } from 'react';

export default function useAuthentication() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );

  function login(username) {
    window.localStorage.setItem("username", username);
    setUsername(username);
  }

  function logout() {
    window.localStorage.removeItem("username");
    setUsername("");
  }

  console.log('username', username);

  return {
    loggedIn: !!username,
    login,
    logout,
    username,
  };
}
