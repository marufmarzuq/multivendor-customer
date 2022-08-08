import { durationConstation } from "../constants/durationConstant";

const initialState = { name: "Markutos", duration: 30 };

export const updateDuration = (state = initialState, action) => {
  switch (action.type) {
    case durationConstation.INC_DURATION:
      return {
        ...state,
        duration: state.duration + 1,
      };

    case durationConstation.DEC_DURATION: {
      return {
        ...state,
        duration: state.duration - 1,
      };
    }

    default:
      return state;
  }
};
