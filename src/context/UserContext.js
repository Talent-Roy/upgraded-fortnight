import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";

const userContext = createContext();

export function useAuth() {
  return useContext(userContext);
}

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    //save user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);

      return unsubscribe;
    });
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <userContext.Provider value={value}>
      {!loading && children}
    </userContext.Provider>
  );
};
