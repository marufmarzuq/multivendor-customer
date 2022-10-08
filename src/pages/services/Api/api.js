import axios from "axios";

// Production
export const API_URL = "https://api.markutos.com/api/v1/seller";
export const API_FRONTEND_URL = "https://api.markutos.com/api/v1/";

// Staging
// export const API_URL = "https://api.greetmypet.goldeninfotech.com.bd/api";

// process.env.greetMyPetEndpoint = "https://api.greetmypet.goldeninfotech.com.bd/api";

export const markutosSellerApi = axios.create({
  baseURL: API_URL,
});
export const markutosFrontendApi = axios.create({
  baseURL: API_FRONTEND_URL,
});
