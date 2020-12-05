import { fetchStart, countUp } from "./actions";

export const countUpAsync = (payload) => {
  return (dispatch, getState) => {
    console.log("fetch start, it takes 3 seconds");
    dispatch(fetchStart());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("now count up");
        dispatch(countUp(payload));
      }, 3000);
      resolve();
    });
  };
};
