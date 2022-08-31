import axios from "axios";
import { store } from "../redux/store/store";

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

    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`);
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
