import CryptoJS from "crypto-js";
import { jwt_secret } from "./JwtScret";

export const encryptData = (data) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), jwt_secret).toString();

export const decryptData = (data) =>
  JSON.parse(
    CryptoJS.AES.decrypt(data, jwt_secret).toString(CryptoJS.enc.Utf8)
  );
