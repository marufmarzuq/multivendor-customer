import axios from "axios";
import { API_URL } from "./Api/api";
class AuthService {
  async login(email, password, remember_me) {
    const response = await axios.post(API_URL + "/login", {
      email,
      password,
      remember_me,
    });
    if (response.data.token) {
      localStorage.setItem("markutosSaler", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("markutosSaler");
  }
  getCurrentUser() {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const userStr = localStorage.getItem("markutosSaler");
      if (userStr) return JSON.parse(userStr);
      return null;
    }
  }
}
export default new AuthService();
