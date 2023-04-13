import Axios from "../lib/Axios";
export const fetchLogin = async (dispatch, loginData) => {
  try {
    const response = await Axios.post(`/users/login`, loginData);
    // const success = await response.json(); //fetch problems + solution
    console.log(`!!!!!`);
    console.log(response.data.userObj);
    localStorage.setItem("jwtToken", response.data.token);
    dispatch({
      type: "LOGIN",
      data: {
        userObj: response.data.userObj,
        token: response.data.token,
      },
    });
  } catch (e) {
    if (e.response) {
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
  }
};
////////////////////////////////////////////////////////////////////////////////

export const register = async (dispatch, newData) => {
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
    if (e.response) {
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
  }
};
/////////////////////////////////////////////////////////////////////////
export const deleteUser = async (dispatch, username) => {
  try {
    const response = await Axios.post(`/users/delete-user`, {
      username: username,
    });
    localStorage.removeItem("jwtToken"); //remove the token from local storage
    dispatch({
      type: "DELETE",
      data: {
        message: response.data.message,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const logout = async (dispatch) => {
  try {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT",
    });
  } catch (e) {
    console.log(e);
  }
};
