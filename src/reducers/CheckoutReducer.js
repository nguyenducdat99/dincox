import * as types from "../constants/ActionTypes";
const initialState = {
    id_account: 37,
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