import axios from "axios";
import authHeader from "../pages/services/auth-header";
import { store } from "../redux/store/store";

// export function authHeader(){
// 	if (typeof window !== 'undefined') {
// 			// Perform localStorage action
// 			const userStr = localStorage.getItem('markutosSaler');
// 			let user = null;
// 			if (userStr)
// 					user = JSON.parse(userStr);
// 			if (user && user) {
// 					return 'Bearer ' + user.toString();
// 			} else {
// 					return null;
// 			}
// 	}
// }

// api calling skeletions are here

// get api
export const getApi = async (url, setState) => {
  try {
    store.dispatch(
      setState({
        loading: true,
        error: "",
        data: [],
      })
    );
    // base url
    // this one will be use for actual api call
    // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`);
    // const baseUrl = 'http://localhost:3000/data/';
    const baseUrl = "https://api.markutos.com/api/v1/seller/";

    // this line is now using for json file
    const res = await axios.get(baseUrl + url, {
      headers: {
        Authorization: authHeader(),
      },
    });
	
    const data = await res.data;
    store.dispatch(
      setState({
        loading: false,
        error: "",
        data: data,
      })
    );
  } catch (error) {
    store.dispatch(
      setState({
        loading: false,
        error: error.message,
        data: [],
      })
    );
  }
};

// post api
const postApi = async (url, setState, data) => {};

// update api
const updateApi = async (url, setState, data) => {};

// delete api
const deleteApi = async (url, setState) => {};
