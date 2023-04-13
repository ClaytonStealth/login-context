import Axios from "../lib/Axios";

const errorHandler = async (e, dispatch, authDispatch) => {
  if (e.response) {
    authDispatch({
      type: "AUTH_FAILURE",
    });

    dispatch({
      type: "ERROR",
      data: {
        message: e.response.data.message,
      },
    });
  } else {
    dispatch({
      type: "ERROR",
      data: {
        message: "No Response From Server",
      },
    });
  }
};
export const fetchLogin = async (dispatch, loginData, authDispatch) => {
  try {
    const response = await Axios.post(`/users/login`, loginData);
    // const success = await response.json(); //fetch problems + solution
    console.log(`!!!!!`);
    console.log(response.data.userObj);
    localStorage.setItem("jwtToken", response.data.token);
    authDispatch({
      type: "AUTH_SUCCESS",
    });
    dispatch({
      type: "LOGIN",
      data: {
        userObj: response.data.userObj,
        token: response.data.token,
      },
    });
  } catch (e) {
    errorHandler(e, dispatch, authDispatch);
  }
};
////////////////////////////////////////////////////////////////////////////////

export const register = async (dispatch, newData, authDispatch) => {
  try {
    const response = await Axios.post(`/users/register`, newData);
    // const success = await response.json(); //fetch problems + solution
    console.log(response.status, response.data);
    console.log(`!!!!!`);
    console.log(response.data.userObj);

    dispatch({
      type: "REGISTER",
      data: response.data.userObj,
    });
  } catch (e) {
    errorHandler(e, dispatch, authDispatch);
  }
};
/////////////////////////////////////////////////////////////////////////
export const deleteUser = async (dispatch, username, authDispatch) => {
  try {
    const response = await Axios.post(`/users/delete-user`, {
      username: username,
    });
    localStorage.removeItem("jwtToken"); //remove the token from local storage
    authDispatch({
      type: "AUTH_FAILURE",
    });
    dispatch({
      type: "DELETE",
      data: {
        message: response.data.message,
      },
    });
  } catch (e) {
    errorHandler(e, dispatch, authDispatch);
  }
};

export const logout = async (dispatch, authDispatch) => {
  try {
    localStorage.removeItem("jwtToken");
    authDispatch({
      type: "AUTH_FAILURE",
    });
    dispatch({
      type: "LOGOUT",
    });
  } catch (e) {
    errorHandler(e, dispatch, authDispatch);
  }
};
