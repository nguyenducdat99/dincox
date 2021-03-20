import * as types from "../constands/ActionTypes";
const initialState = [];


var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_ORDER:
            state = action.payload;

            return [...state];
        default:
            return state;
    }
}

export default myReducer;