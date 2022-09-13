import { loadFromLocalStorage } from "../../utils/seller/manageLocalStorage";

export default function authHeader() {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userStr = loadFromLocalStorage();
    let user = null;
    if (userStr) user = userStr?.access_token;
    if (user && user) {
      return "Bearer " + user.toString();
    } else {
      return null;
    }
  }
}
