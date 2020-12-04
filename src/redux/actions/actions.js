import { COUNT_UP, COUNT_DOWN } from "./actions/actionTypes";

const countUp = (payload) => ({
  type: COUNT_UP,
  payload: {
    number: payload
  }
});
const countDown = (payload) => ({
  type: COUNT_DOWN,
  payload: {
    number: payload
  }
});

export { countUp, countDown };
