import { Children, createContext, useReducer } from "react";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);
const baseURL = "http://localhost:3001/api";
const initialState = {
  username: "",
  password: "",
  isAuth: false,
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
      let isAuth = false;
      const fetchLogin = async () => {
        try {
          const success = await fetch(`${baseURL}/users/login`);
          const data = await success.json();
          console.log(data.message);
        } catch (e) {
          console.log(e);
        }
      };
      fetchLogin();

      //need to check to make sure pass and username are correct
      // action.data.username === "stealth" ? (isAuth = true) : (isAuth = false);
      return { ...action.data, isAuth: isAuth };
    case "LOGOUT":
      return initialState;
    default:
      alert("default");
      break;
  }
};
