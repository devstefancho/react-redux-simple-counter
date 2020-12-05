import { COUNT_UP, COUNT_DOWN, FETCH_START } from "./actionTypes";

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
const fetchStart = () => ({
  type: FETCH_START
});

export { countUp, countDown, fetchStart };
