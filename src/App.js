import { createContext, useContext, useState } from "react";
import "./App.css";

import { LoginContext, LoginProvider } from "./context/LoginContext";
import { AuthProvider } from "./context/AuthContext";

import Login from "./components/Login";
import { checkAuthToken } from "./lib/checkAuthToken";
checkAuthToken();

function App() {
  const [theme, setTheme] = useState("dark");
  const [login, setLogin] = useState(false);

  return (
    <div className='App'>
      {/* <AuthProvider> */}
      <LoginProvider>
        <Login />
      </LoginProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
