import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { updateDuration } from "../reducers/updateDuraionReducer";

export const store = createStore(updateDuration);
