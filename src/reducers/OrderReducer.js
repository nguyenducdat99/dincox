import * as types from "../constants/ActionTypes";
const initialState = [];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORDER:
      state = action.payload;
      if (action.payload.length === 0) alert("Bạn chưa mua sản phẩm nào!");

      return [...state];
    case types.GET_DATA_STATISTICS:
      state = action.payload;

      return [...state];
    case types.UPDATE_STATUS_ORDER:
      const payload = action.payload;
      const index = findOrder(payload.id_order, state);

      if (index > -1) {
        state[index] = {
          ...state[index],
          status: payload.status,
        };
      }

      return [...state];
    case types.RESET_ORDER:
      return initialState;
    default:
      return state;
  }
};

const findOrder = (id_order, orders) => {
  let result = -1;

  orders.forEach((element, index) => {
    if (element.id_order * 1 === id_order * 1) result = index;
  });

  return result;
};

export default myReducer;
