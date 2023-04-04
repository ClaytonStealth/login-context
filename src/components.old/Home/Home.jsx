import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
const Home = () => {
  const { theme, setTheme, changeTheme } = useContext(ThemeContext);
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
    </>
  );
};

export default Home;
