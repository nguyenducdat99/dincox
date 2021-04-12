import * as types from "../constants/ActionTypes";
const initialState = {
    id_account: '',
    user_name: '',
    password: '',
    position: '0',
    email: '',
    status: 0
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ACCOUNT_EDIT:
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}

export default myReducer;