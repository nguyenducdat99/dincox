import * as types from '../constands/ActionTypes';
const initialState = [
	{
		id_product: 1,

		product_name: 'Sản Phẩm 1',
		create_ate: '',
		edited_ate: '',
		is_sale: 0,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 300000,
		is_active: 1
	},
	{
		id_product: 2,
		id_category: 1,

		product_name: 'Sản Phẩm 2',
		create_ate: '',
		edited_ate: '',
		is_sale: 0,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 350000,
		is_active: 1
	},
	{
		id_product: 3,
		id_category: 1,

		product_name: 'Sản Phẩm 3',
		create_ate: '',
		edited_ate: '',
		is_sale: 0,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 375000,
		is_active: 1
	},
	{
		id_product: 4,
		id_category: 1,

		product_name: 'Sản Phẩm 4',
		create_ate: '',
		edited_ate: '',
		is_sale: 0,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 420000,
		is_active: 1
	},
	{
		id_product: 5,
		id_category: 1,

		product_name: 'Sản Phẩm 5',
		create_ate: '',
		edited_ate: '',
		is_sale: 0,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 305000,
		is_active: 1
	},
	{
		id_product: 6,
		id_category: 1,

		product_name: 'Sản Phẩm 6',
		create_ate: '',
		edited_ate: '',
		is_sale: 1,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 275000,
		is_active: 1
	},
	{
		id_product: 7,
		id_category: 1,

		product_name: 'Sản Phẩm 7',
		create_ate: '',
		edited_ate: '',
		is_sale: 1,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 410000,
		is_active: 1
	},
	{
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
	{
		id_product: 9,
		id_category: 1,
		product_name: 'Sản Phẩm 9',
		create_ate: '',
		edited_ate: '',
		is_sale: 1,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 410000,
		is_active: 1
	},
	{
		id_product: 10,
		id_category: 1,

		product_name: 'Sản Phẩm 10',
		create_ate: '',
		edited_ate: '',
		is_sale: 1,
		description: '',
		count_comment: 0,
		count_buy: 0,
		price: 275000,
		is_active: 1
	}
];

var ProductReducer = (state=initialState, action) => {
    switch(action.type){
        case types.LIST_PRODUCT:
            return state;
        default: 
            return state;
    };
};

export default ProductReducer;