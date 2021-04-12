import * as types from "../constants/ActionTypes";
const initialState = {
    id_size: '',
    size_name: '',
    created_at: null,
    edited_at: null,
    status: 0
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.SIZE_EDIT:
            // console.log(action.payload);
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}

export default myReducer;