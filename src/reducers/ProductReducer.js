import * as types from '../constants/ActionTypes';

const initialState = [];

function findIndex(state, id) {
    var result= -1;
    state.forEach((item, index) => {

        if (item.id_product*1 === id*1) {
            result = index; 
        };
    });
    return result;
}

var index = -1;

var ProductReducer = (state=initialState, action) => {
    switch(action.type){
		case types.FETCH_PRODUCT:
			state = action.payload;
			return [...state];
        case types.SAVE_PRODUCT:
            index = findIndex(state,action.payload.id_product);
            // console.log(action.payload);
            // console.log(index);
            if (index === -1) {
                state.push(action.payload);
            }else{
                
                state[index] = action.payload;
            }

            return [...state] 
        case types.UPDATE_STATUS_PRODUCT:
            index = findIndex(state,action.payload);
            if (index !== -1 ) {
                state[index] = {
                    ...state[index],
                    status: (state[index].status*1===1)?0:1
                }
            }

            return [...state]
        case types.UPDATE_SALE_PRODUCT:
            index = findIndex(state,action.payload);
            if (index !== -1 ) {
                state[index] = {
                    ...state[index],
                    is_sale: (state[index].is_sale*1===1)?0:1
                }
            }

            return [...state]
        default: 
            return state;
    };
};

export default ProductReducer;