import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

const initialState = {
  isAuth: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const authReducer = (auth, action) => {
  return action.data;
};
