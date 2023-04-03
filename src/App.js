import { createContext, useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [theme, setTheme] = useState("dark");
  //global theme setter
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const words = "yo";
  return (
    <div className='App'>
      <ThemeContext.Provider value={{ theme, setTheme, words, changeTheme }}>
        <h1>Login</h1>
        <NavBar />
        <Home />
      </ThemeContext.Provider>
      <Card />
    </div>
  );
}

export default App;
