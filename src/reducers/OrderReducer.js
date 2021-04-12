import * as types from "../constants/ActionTypes";
const initialState = [];


var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_ORDER:
            state = action.payload;
            if (action.payload.length===0) alert('Bạn chưa mua sản phẩm nào!');

            return [...state];

        case types.RESET_ORDER:
            
            return initialState; 
        default:
            return state;
    }
}

export default myReducer;