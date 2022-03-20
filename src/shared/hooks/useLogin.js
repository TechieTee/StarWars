import { useState, useCallback } from "react";

export function useLogin() {
  const s = Boolean(sessionStorage.getItem("loggedIn"));
  const [loggedIn, setLoggedIn] = useState(s || false);

  const login = useCallback(() => {
    setLoggedIn(true);
    sessionStorage.setItem("loggedIn", "true");
  }, []);

  const logOut = useCallback(() => {
    setLoggedIn(false);
    sessionStorage.removeItem("loggedIn");
    window.location.reload();
  }, []);

  return {
    loggedIn,
    login,
    logOut,
  };
}
