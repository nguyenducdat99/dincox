import * as types from '../constands/ActionTypes';
const initialState = ["hello","i", "am", "react"];

var ListProduct = (state=initialState, action) => {
    // switch(action.type){
    //     case types.LIST_PRODUCT:
    //         break;
    //     case types.LIST_PRODUCT_SALE: 
    //         break;
    //     default: 
    //         {
    //             state.push("push");
    //             return state;
    //         }
    // }
    // state.push('push');
    return state;
}

export default ListProduct;