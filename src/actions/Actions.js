import * as types from '../constands/ActionTypes';

export const listProduct = () => {
    return {
        type : types.LIST_PRODUCT
    }
};

export const listProductSale = () => {
    return {
        type : types.LIST_PRODUCT_SALE
    }
};