import * as types from '../constands/ActionTypes';
import callApi from '../utils/ApiCaller';

// handle for products
export const fetchProduct = products => {
    return {
        type: types.FECTH_ACCOUNT,
        payload: products
    }
}
export const listProduct = () => {
    return {
        type : types.LIST_PRODUCT
    }
};

// handle for news
export const listNew = () => {
    return {
        type: types.LIST_NEW
    }
}


// handle for accounts
export const fetchAccountRequest = () => {
    return (dispatch) => {
        return callApi('accounts','GET',null).then(
            res => {
                dispatch(fetchAccount(res.data));
            }
        )
    }
}
export const fetchAccount = (items) => {
    return {
        type: types.FECTH_ACCOUNT,
        payload: items
    }
}
export  const listAccount = () => {
    return {
        type: types.LIST_ACCOUNT
    }
}
export const saveAccountRequest = (item) => {
  
    item = {
        ...item,
        status: item.status*1
    }
    let id = item.id_account;

    if (id !== ''){
        return (dispatch) => {
            return callApi(('accounts/'+id),'PUT', item).then(
                res => {
                    dispatch(saveAccount(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('accounts','POST', item).then(
                res => {
                    dispatch(saveAccount(res.data));
                }
            )
        }
    }
    
}
export const saveAccount = newAccount => {
    return {
        type: types.SAVE_ACCOUNT,
        payload: newAccount
    }
}


export const updateStatusAccountRequest = (item) => {

    item = {
        ...item,
        status: (item.status*1===1)?0:1
    }
    let id = item.id_account;

    return (dispatch) => {
        return callApi(('accounts/'+id),'PUT', item).then(
            res => {
                dispatch(updateStatusAccount(res.data.id_account));
                // console.log(res.data);
            }
        )
    }
  
}
export const updateStatusAccount = id_account => {
    return {
        type: types.UPDATE_STATUS_ACCOUNT,
        payload: id_account
    }
}

export const deleteAccountRequest = id_account => {
    return (dispatch) => {
        return callApi(('accounts/'+id_account),'DELETE',null).then(
            res => {
                dispatch(deleteAccount(id_account));
            }
        )
    }
}
export const deleteAccount = id_account => {
    return {
        type: types.DELETE_ACCOUNT,
        payload: id_account
    }
}

export const selectAccountRequest = id => {
    return (dispatch) => {
        return callApi(('accounts/'+id),'GET',id).then(
            res => {
                dispatch(selectAccount(res.data));
            }
        )
    }
}
export const selectAccount = account => {
    return {
        type: types.ACCOUNT_EDIT,
        payload: account
    }
}


export const loginAccountRequest = account => {
    return (dispatch) => {
        return callApi('login','POST', account).then(
            res => {
                dispatch(loginAccount(res.data));
            }
        )
    }
}
export const loginAccount = info => {
    return {
        type: types.LOGIN_ACCOUNT,
        payload: info
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
export const addToCart = (newItem,size,quantity) => {
    return {
        type: types.ADD_TO_CART,
        payload: newItem,
        size,
        quantity
    }
}
export const delItenInCart = delItem => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        payload: delItem
    }
}
export const updateQuantityItem = (updateItem,quantity) => {
    return {
        type: types.UPDATE_QUANTITY_ITEM,
        payload: updateItem,
        quantity
    }
}

