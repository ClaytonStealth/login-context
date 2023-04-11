import Axios from "../lib/Axios";
export const fetchLogin = async (dispatch, loginData) => {
  try {
    const response = await Axios.post(`/users/login`, loginData);
    // const success = await response.json(); //fetch problems + solution
    console.log(response.status, response.data);
    console.log(`!!!!!`);
    console.log(response.data.userObj);

    dispatch({
      type: "LOGIN",
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
