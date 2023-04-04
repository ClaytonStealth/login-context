import { Children, createContext } from "react";

export const LoginContext = createContext("login");

export const LoginProvider = ({ children }) => {
  return (
    <LoginContext.Provider value='Login!'>
      <div>
        Hello
        {children}
      </div>
    </LoginContext.Provider>
  );
};
