import * as types from "../constands/ActionTypes";
const initialState = [];
var MyReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_ARTICLE:
            state = action.payload;

			return [...state];
        default:
            return state;
    }
}

export default MyReducer;