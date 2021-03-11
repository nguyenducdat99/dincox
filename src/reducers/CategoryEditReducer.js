import * as types from "../constands/ActionTypes";
const initialState = {
    id_category: '',
    category_name: '',
    created_at: '',
    edited_at: '',
    status: 0
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.CATEGORY_EDIT:
            // console.log(action.payload);
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}

export default myReducer;