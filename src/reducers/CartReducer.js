import * as types from "../constands/ActionTypes";

let data = JSON.parse(localStorage.getItem('cartStore'))
const initialState = data ? data : [];

// handle find index 
var findIndex = (items, id_item) => {
	let result = -1;
	items.forEach((item,index) => {
		if (item.product.id_product === id_item) {
			result=index;
		}
	});

	return result;
}


var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
			let index = findIndex(state,action.payload.id_product);
			if (index !== -1) {
				state[index] = {
					...state[index],
					quantity: state[index].quantity+1 
				}
			} else {
				state.push(
					{
						product: action.payload,
						size: action.size,
						quantity: action.quantity
					}
				)
			}
			localStorage.setItem('cartStore',JSON.stringify(state));
			
            return [...state];
		
        default:
            return state;
    }
}

export default myReducer;