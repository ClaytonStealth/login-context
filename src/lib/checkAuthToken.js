import { setHeaderToken } from "./setHeaderToken";

export const checkAuthToken = () => {
  let jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken) {
    setHeaderToken(jwtToken);
  } else {
    //set auth false
        
  }
};
