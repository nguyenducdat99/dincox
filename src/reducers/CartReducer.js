import * as types from "../constands/ActionTypes";

let data = JSON.parse(localStorage.getItem('cartStore'))
const initialState = data ? data : [];

// handle find index 
var findIndex = (items, id_item,id_size) => {
	let result = -1;
	items.forEach((item,index) => {
		if (item.product.id_product === id_item&&item.size===id_size) {
			result=index;
		}
	});

	return result;
}

var index = -1;
var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:

			index = findIndex(state,action.payload.id_product,action.size);
			
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
		case types.DELETE_ITEM_IN_CART:
			index = findIndex(state,action.payload.product.id_product,action.size);
			state.splice(index,1);

			localStorage.setItem('cartStore',JSON.stringify(state));
			return [...state];

		case types.UPDATE_QUANTITY_ITEM:
			index = findIndex(state,action.payload.product.id_product,action.size);
			state[index] = {
				...state[index],
				quantity: action.quantity
			}
			
			localStorage.setItem('cartStore',JSON.stringify(state));
			return [...state];

        default:
            return state;
    }
}

export default myReducer;