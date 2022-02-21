import React, { useState, useEffect, createContext } from "react";
import firebaseConfig from "./Firebase";
import Loading from "./Loading";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Loading />;
  }

  return (
    // Then we pass the current user that we get from firebase to the components
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
