import { Children, createContext, useReducer } from "react";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

const initialState = {
  username: "",
  password: "",
};

export const LoginProvider = ({ children }) => {
  const [login, dispatch] = useReducer(loginReducer, initialState);
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <div>
          Hello
          {children}
        </div>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

const loginReducer = (login, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    default:
      alert("default");
      break;
  }
};
