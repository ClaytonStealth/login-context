import { createContext, useEffect, useReducer } from "react";
import { checkAuthToken } from "../lib/checkAuthToken";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

const initialState = {
  isAuth: false,
};

checkAuthToken();
export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    let authy = checkAuthToken();
    authy
      ? dispatch({ type: "AUTH_SUCCESS" })
      : dispatch({ type: "AUTH_FAILURE" });
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const authReducer = (auth, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        isAuth: true,
      };
    case "AUTH_FAILURE":
      return {
        isAuth: false,
      };
    default:
      return {
        isAuth: false,
      };
  }
};
