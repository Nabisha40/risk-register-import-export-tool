import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const login = async (email, password) => {

    const fakeUser = {
      email: email,
    };

    setUser(fakeUser);

    localStorage.setItem(
      "user",
      JSON.stringify(fakeUser)
    );
  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};