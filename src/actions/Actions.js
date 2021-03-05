import * as types from '../constands/ActionTypes';

// handle for products
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

// handle for news
export const listNew = () => {
    return {
        type: types.LIST_NEW
    }
}


// handle for accounts
export  const listAccount = () => {
    return {
        type: types.LIST_ACCOUNT
    }
}
export const addAccount = newAccount => {
    return {
        type: types.ADD_ACCOUNT,
        newAccount
    }
}

// handle for categories
export const listCategory = () => {
    return {
        type: types.LIST_CATEGORY
    }
}

export const addCategory = newCategory => {
    return {
        type: types.ADD_CATEGORY,
        payload: newCategory
    }
}

