import * as types from "../constants/ActionTypes";
const initialState = {
    id_product: '',
    id_category: '',
    product_name: '',
    is_sale: 0,
    description: '',
    price: 0,
    status: 0,
};

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_EDIT:
            // console.log(action.payload);
			state = action.payload

            return {...state};
		
        default:
            return state;
    }
}

export default myReducer;