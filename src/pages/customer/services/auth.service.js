
class AuthService {
  logout() {
    localStorage.removeItem("markutosUser");
  }
}
export default new AuthService();
