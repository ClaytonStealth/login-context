import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
const Home = () => {
  const { theme, setTheme, words } = useContext(ThemeContext);
  const funcAlert = () => {
    // words = words + words;
    alert(words);
  };
  return (
    <>
      <div className={theme}>Home</div>
      <button onClick={() => setTheme("light")}>Change Theme</button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={() => funcAlert()}>Func</button>
    </>
  );
};

export default Home;
