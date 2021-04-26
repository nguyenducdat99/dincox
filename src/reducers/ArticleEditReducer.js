import * as types from "../constants/ActionTypes";
const initialState = {
    id_new: '',
    author: '',
    title: '',
    contents: '',
    reference_links: '',
    status: 0
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ARTICLE_EDIT:
            // console.log(action.payload);
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}

export default myReducer;