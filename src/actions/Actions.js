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

export const listNew = () => {
    return {
        type: types.LIST_NEW
    }
}

export  const listAccount = () => {
    return {
        type: types.LIST_ACCOUNT
    }
}