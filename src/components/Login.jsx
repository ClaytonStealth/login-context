import React, { useState, useContext } from "react";
import { LoginContext, LoginDispatchContext } from "../context/LoginContext";
import { ThemeContext } from "../context/ThemeContext";
import {
  deleteUser,
  fetchLogin,
  register,
} from "../context/LoginContextHelper";

const Login = () => {
  const login = useContext(LoginContext);
  //   const theme = useContext(ThemeContext);
  const dispatch = useContext(LoginDispatchContext);
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {" "}
      Login
      <h3>Message: {login.message}</h3>
      {login.isAuth ? (
        <>
          <h3>UserName: {login.username}</h3>
          <h3>Password: {login.password}</h3>
          <button
            onClick={() => {
              dispatch({
                type: "LOGOUT",
              });
            }}
          >
            Log Out
          </button>
          <button onClick={() => deleteUser(dispatch, login.username)}>
            Delete!
          </button>
        </>
      ) : (
        <>
          <label htmlFor='username'>UserName: </label>
          <input
            type='text'
            name='username'
            value={loginState.username}
            placeholder='Username'
            onChange={onChangeHandler}
          />{" "}
          <br />
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            value={loginState.password}
            placeholder='Password'
            onChange={onChangeHandler}
          />
          <br />
          <button onClick={() => fetchLogin(dispatch, loginState)}>
            Login Dispatch
          </button>
          <br />
          <button onClick={() => register(dispatch, loginState)}>
            Register Dispatch
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
