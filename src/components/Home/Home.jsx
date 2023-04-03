import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
const Home = () => {
  const { theme, setTheme, words, changeTheme } = useContext(ThemeContext);
  const funcAlert = () => {
    // words = words + words;
    alert(words);
  };
  //local theme setter
  // const changeThemeLocal = () => {
  //   let currentTheme = theme;
  //   currentTheme === "light" ? setTheme("dark") : setTheme("light");
  // };
  return (
    <>
      <div className={theme}>Home</div>
      <button onClick={() => changeTheme()}>Change Theme</button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={() => funcAlert()}>Func</button>
    </>
  );
};

export default Home;
