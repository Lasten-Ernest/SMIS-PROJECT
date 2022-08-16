import axios from "axios";
import authHeader from "./auth-header";

//api url
const API_URL = "http://localhost:4000/api/school/";

//get public content board from the server
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

//get authenticated users board from the server
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

//get authenticated teacher board from the server
const getTeacherBoard = () => {
  return axios.get(API_URL + "teacher", { headers: authHeader() });
};

//get authenticated admin board from the server
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

//get authenticated student board from the server
const getStudentBoard = () => {
  return axios.get(API_URL + "student", { headers: authHeader() });
};

//get authenticated parent board from the server
const getParentBoard = () => {
  return axios.get(API_URL + "parent", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard,
  getTeacherBoard,
  getAdminBoard,
  getParentBoard,
  getStudentBoard
};