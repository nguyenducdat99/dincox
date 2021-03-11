import * as types from '../constands/ActionTypes';

const initialState = [];

var ProductReducer = (state=initialState, action) => {
    switch(action.type){
		case types.FETCH_PRODUCT:
			state = action.payload;
			return state;
        case types.LIST_PRODUCT:
            return state;
        default: 
            return state;
    };
};

export default ProductReducer;