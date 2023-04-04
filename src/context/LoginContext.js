import { Children, createContext, useReducer } from "react";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [login, dispatch] = useReducer(loginReducer, "login");
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
  return action.data;
  // switch (action.type) {
  //     case "LOGIN":
  //     return action.payload;
  //     default:
  //     return login;
  // }
};
