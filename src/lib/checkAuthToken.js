export const checkAuthToken = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken) {
    alert("true");
  } else {
    alert("false");
  }
};
