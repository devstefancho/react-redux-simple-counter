import { COUNT_UP, COUNT_DOWN } from "../actions/actionTypes";

const init = {
  count: 0
};

export default function (state = init, action) {
  switch (action.type) {
    case COUNT_UP: {
      const { number } = action.payload;
      return { count: state.count + number };
    }
    case COUNT_DOWN: {
      const { number } = action.payload;
      return { count: state.count - number };
    }
    default: {
      return state;
    }
  }
}
