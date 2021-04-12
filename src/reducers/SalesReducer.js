import * as types from "../constands/ActionTypes";
const initialState = [];

var myReducer = (state=initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case types.FETCH_SALES:

        state = [...payload]

            return [...payload];
		
        default:
            return state;
    }
}

export default myReducer;