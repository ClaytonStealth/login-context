import { createContext, useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { LoginContext, LoginProvider } from "./context/LoginContext";
import Login from "./components/Login";
function App() {
  const [theme, setTheme] = useState("dark");
  const [login, setLogin] = useState(false);
  return (
    <div className='App'>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoginProvider>
          <Login />
        </LoginProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
