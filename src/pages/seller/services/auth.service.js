class AuthService {
  logout() {
    localStorage.removeItem("markutosSeller");
  }
}
export default new AuthService();
