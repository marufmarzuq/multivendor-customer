import UNIVERSAL from "config";
import CryptoJS from "crypto-js";

const encrypt = (object) => {
  const jwt_secret = UNIVERSAL.JWT_SECRET;
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(object),
    jwt_secret
  ).toString();
  return data;
};
export default encrypt;
