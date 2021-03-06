import * as types from "../constands/ActionTypes";
const initialState = {
    id_account: '',
    user_name: '',
    password: '',
    position: '0',
    email: '',
    status: false
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ACCOUNT_EDIT:
			state = action.payload;

            return state;
		
        default:
            return state;
    }
}

export default myReducer;