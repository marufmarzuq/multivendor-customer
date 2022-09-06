import axios from "axios";


// Production 
export const API_URL = "https://api.markutos.com/api/v1/seller";

// Staging
// export const API_URL = "https://api.greetmypet.goldeninfotech.com.bd/api";

// process.env.greetMyPetEndpoint = "https://api.greetmypet.goldeninfotech.com.bd/api";

export const markutosAdminApi = axios.create({
    baseURL: API_URL
});