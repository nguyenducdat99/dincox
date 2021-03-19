import * as types from "../constands/ActionTypes";
const initialState = {
    name: '',
    email: '',
    numberPhone: '',
    address: ''
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_CHECKOUT:
			state = action.payload

            return {...state};
		case types.DELETE_CHECKOUT:

        return initialState;
           default:
            return state;
    }
}

export default myReducer;