import * as types from "../constants/ActionTypes";

const initialState = [];

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        
		case types.FETCH_ORDER_DETAIL:
            state = action.payload;

            return [...state];
        default:
            return state;
    }
}

export default myReducer;