
import axios from "axios";

//api auth url
const API_URL = "http://localhost:4000/api/auth/";

//signup form for the user (in progress)
const register = (username, email, password ) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    
  })
}

//login function using username and password
const login = async (username, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

//logout function the remove/destroy user access token from the localstorage
const logout = () => {
  localStorage.removeItem("user");
};

//function for getting current user upon successfully logged in
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };