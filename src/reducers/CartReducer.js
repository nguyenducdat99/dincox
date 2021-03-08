import * as types from "../constands/ActionTypes";

const initialState = [
	{
		product: {
			id_product: 8,
			id_category: 1,
			product_name: 'Sản Phẩm 8',
			create_ate: '',
			edited_ate: '',
			is_sale: 1,
			description: '',
			count_comment: 0,
			count_buy: 0,
			price: 340000,
			is_active: 1
		},
		size: '44',
		quantity: 40

	}
];

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
			
            return [...state];
		
        default:
            return state;
    }
}

export default myReducer;