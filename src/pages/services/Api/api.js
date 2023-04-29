import axios from "axios";

// Production
export const API_URL = "https://test.nzcoding.com/api/v1/seller";
export const API_FRONTEND_URL = "https://test.nzcoding.com/api/v1/";

// Staging
// process.env.greetMyPetEndpoint = "https://api.greetmypet.goldeninfotech.com.bd/api";

export const markutosSellerApi = axios.create({
  baseURL: API_URL,
});
export const markutosFrontendApi = axios.create({
  baseURL: API_FRONTEND_URL,
});
