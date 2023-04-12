import { createContext, useReducer } from "react";
export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);
const initialState = {
  firstname: "",
  username: "",
  password: "",
  isAuth: false,
  message: "Please Log In",
};

export const LoginProvider = ({ children }) => {
  const [login, dispatch] = useReducer(loginReducer, initialState);
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <div>{children}</div>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

const loginReducer = (login, action) => {
  switch (action.type) {
    case "LOGIN":
      login.isAuth = false;

      return {
        ...action.data.userObj,
        isAuth: true,
        message: `Thank you for logging in ${action.data.userObj.username}`,
        token: action.data.token,
      };
    case "REGISTER":
      login.isAuth = false;
      console.log("--------------");
      console.log(action.data);
      return {
        ...action.data,
        isAuth: true,
        message: `Thank you for registering ${action.data.username}`,
      };
    case "LOGOUT":
      return {
        username: "",
        password: "",
        isAuth: false,
      };
    case "ERROR":
      return {
        username: "",
        password: "",
        isAuth: false,
        message: action.data.message,
      };
    case "DELETE":
      return {
        ...login,
        isAuth: false,
        message: action.data.message,
      };
    default:
      alert("default");
      break;
  }
};
