import Axios from "../lib/Axios";
export const fetchLogin = async (dispatch, loginData) => {
  try {
    const response = await Axios.post(`/users/login`, loginData);
    // const success = await response.json(); //fetch problems + solution
    console.log(response.status, response.data);
    console.log(`!!!!!`);
    console.log(response.data.userObj);
    if (response.status === 200 || response.status === 304) {
      //   return response.data;
      dispatch({
        type: "LOGIN",
        data: response.data.userObj,
      });
    } else {
      throw new Error(response.status);
    }
  } catch (e) {
    console.log(e);
  }
};

export const register = async (dispatch, newData) => {
  try {
    const response = await Axios.post(`/users/register`, newData);
    // const success = await response.json(); //fetch problems + solution
    console.log(response.status, response.data);
    console.log(`!!!!!`);
    console.log(response.data.userObj);
    if (response.status === 200 || response.status === 304) {
      //   return response.data;
      dispatch({
        type: "REGISTER",
        data: response.data.userObj,
      });
    } else {
      throw new Error(response.status);
    }
  } catch (e) {
    console.log("-------");
    console.log(e.response.status);
    console.log(e.response.data.message);
  }
};
