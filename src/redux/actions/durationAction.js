import { durationConstation } from "../constants/durationConstant";

export const incDurationAction = () => {
  return {
    type: durationConstation.INC_DURATION,
  };
};

export const decDurationAction = () => {
  return {
    type: durationConstation.DEC_DURATION,
  };
};
