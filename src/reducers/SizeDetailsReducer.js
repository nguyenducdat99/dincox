import * as types from "../constants/ActionTypes";

const initialState = [];

function findIndex(state, id_product, id_size) {
  let result = -1;
  state.forEach((item, index) => {
    if (
      item.id_size * 1 === id_size * 1 &&
      item.id_product * 1 === id_product * 1
    ) {
      result = index;
    }
  });
  return result;
}

var index = -1;
const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SIZE_DETAILS:
      state = action.payload;
      state.sort(function (a, b) {
        return a.id_size - b.id_size;
      });

      return [...state];
    case types.SAVE_SIZE_DETAIL:
      index = findIndex(
        state,
        action.payload.id_product,
        action.payload.id_size
      );
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
      state.sort(function (a, b) {
        return a.id_size - b.id_size;
      });
      return [...state];
    case types.RETURN_QUANTITY:
      index = findIndex(
        state,
        action?.payload?.data?.id_product,
        action?.payloay?.data?.id_size
      );

      if (index !== -1) {
        state[index] = {
          ...state[index],
          quantity: action?.payload?.data?.quantity * 1,
        };
      }

      return [...state];

    default:
      return state;
  }
};

export default MyReducer;
