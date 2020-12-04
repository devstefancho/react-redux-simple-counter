import { COUNT_UP, COUNT_DOWN } from "./actionTypes";

const countUp = (payload = 1) => ({
  type: COUNT_UP,
  payload: {
    number: payload
  }
});
const countDown = (payload = 1) => ({
  type: COUNT_DOWN,
  payload: {
    number: payload
  }
});

export { countUp, countDown };
