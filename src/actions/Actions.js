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
export const saveAccount = newAccount => {
    return {
        type: types.SAVE_ACCOUNT,
        payload: newAccount
    }
}
export const updateStatusAccount = id_account => {
    return {
        type: types.UPDATE_STATUS_ACCOUNT,
        payload: id_account
    }
}
export const deleteAccount = id_account => {
    return {
        type: types.DELETE_ACCOUNT,
        payload: id_account
    }
}
export const selectAccountEdit = account => {
    return {
        type: types.ACCOUNT_EDIT,
        payload: account
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
export const updateStatusCategory = id_category => {
    return {
        type: types.UPDATE_STATUS_CATEGORY,
        payload: id_category
    }
}

// handle for status form
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

// handle for cart 
export const addToCart = newItem => {
    return {
        type: types.ADD_TO_CART,
        payload: newItem
    }
}

