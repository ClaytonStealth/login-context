import React, { useState, useContext } from "react";
import { LoginContext, LoginDispatchContext } from "../context/LoginContext";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
  const login = useContext(LoginContext);
  //   const theme = useContext(ThemeContext);
  const dispatch = useContext(LoginDispatchContext);
  const [loginState, setLoginState] = useState({
    username: "hello",
    password: "World",
  });
  const onChangeHandler = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {login.isAuth ? (
        <button
          onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
          }}
        >
          Log Out
        </button>
      ) : (
        <>
          <label htmlFor='username'>UserName: </label>
          <input
            type='text'
            name='username'
            value={loginState.username}
            onChange={onChangeHandler}
          />{" "}
          <br />
          <label htmlFor='password'>Password: </label>
          <input
            type='text'
            name='password'
            value={loginState.password}
            onChange={onChangeHandler}
          />
          <br />
          <button
            onClick={() =>
              dispatch({
                type: "LOGIN",
                data: loginState,
              })
            }
          >
            Login Dispatch
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
