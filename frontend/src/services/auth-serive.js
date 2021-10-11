import axios from "axios";

const API_URL = "http://localhost:8080/api/user"; //backend API address

class AuthService {
  signin(email, password) {
    return axios.post(API_URL + "/signin", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(firstName, lastName, userName, email, password) {
    return axios.post(API_URL + "/register", {
      firstname: firstName,
      lastname: lastName,
      username: userName,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
