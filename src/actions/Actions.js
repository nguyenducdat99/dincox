import * as types from '../constands/ActionTypes';
import callApi from '../utils/ApiCaller';

// handle for products
export const fetchProductRequest = () => {
    return (dispatch) => {
        return callApi('products','GET',null).then(
            res => {
                dispatch(fetchProduct(res.data));
            }
        )
    }
}
export const fetchProduct = products => {
    return {
        type: types.FETCH_PRODUCT,
        payload: products
    }
}
export const listProduct = () => {
    return {
        type : types.LIST_PRODUCT
    }
};

// handle for news
export const fetchArticleRequest = () => {
    return (dispatch) => {
        return callApi('news','GET',null).then(
            res => {
                dispatch(fetchArticle(res.data));
                // console.log(res.data);
            }
        )
    }
}
export const fetchArticle = items => {
    return {
        type: types.FETCH_ARTICLE,
        payload: items
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
export const fetchCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('categories','GET',null).then(
            res => {
                dispatch(fetchCategories(res.data));
            }
        )
    }
}
export const fetchCategories = items => {
    return {
        type: types.FETCH_CATEGORIES,
        payload: items
    }
}

export const saveCategoryRequest = (item) => {
  
    item = {
        ...item,
        status: item.status*1
    }
    let id = item.id_category;

    if (id !== ''){
        return (dispatch) => {
            return callApi(('categories/'+id),'PUT', item).then(
                res => {
                    dispatch(saveCategory(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('categories','POST', item).then(
                res => {
                    dispatch(saveCategory(res.data));
                }
            )
        }
    }
    
}
export const saveCategory = item => {
    return {
        type: types.SAVE_CATEGORY,
        payload: item
    }
}
export const selectCategoryRequest = id => {
    return (dispatch) => {
        return callApi(('categories/'+id),'GET',null).then(
            res => {
                // console.log(res.data);
                dispatch(selectCategory(res.data));
            }
        )
    }
}
export const selectCategory = item => {
    return {
        type: types.CATEGORY_EDIT,
        payload: item
    }
}
export const updateStatusCategoryRequest = (item) => {

    item = {
        ...item,
        status: (item.status*1===1)?0:1
    }
    let id = item.id_category;

    return (dispatch) => {
        return callApi(('categories/'+id),'PUT', item).then(
            res => {
                dispatch(updateStatusCategory(res.data.id_category));
                // console.log(res.data);
            }
        )
    }
  
}
export const updateStatusCategory = id => {
    return {
        type: types.UPDATE_STATUS_CATEGORY,
        payload: id
    }
}

export const deleteCategoryRequest = id => {
    return (dispatch) => {
        return callApi(('categories/'+id),'DELETE',null).then(
            res => {
                 dispatch(deleteCategory(id));
            }
        )
        
    }
}
export const deleteCategory = id => {
    return {
        type: types.DELETE_CATEGORY,
        payload: id
    }
}

// hadle for sizes
export const fetchSizesRequest = () => {
    return (dispatch) => {
        return callApi('sizes','GET',null).then(
            res => {
                dispatch(fetchSizes(res.data));
            }
        )
    }
}
export const fetchSizes = items => {
    return {
        type: types.FETCH_SIZES,
        payload: items
    }
}

export const saveSizeRequest = (item) => {
  
    item = {
        ...item,
        status: item.status*1
    }
    let id = item.id_size;

    if (id !== ''){
        return (dispatch) => {
            return callApi(('sizes/'+id),'PUT', item).then(
                res => {
                    dispatch(saveSize(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('sizes','POST', item).then(
                res => {
                    dispatch(saveSize(res.data));
                }
            )
        }
    }
    
}
export const saveSize = item => {
    return {
        type: types.SAVE_SIZE,
        payload: item
    }
}
export const selectSizeRequest = id => {
    return (dispatch) => {
        return callApi(('sizes/'+id),'GET',null).then(
            res => {
                // console.log(res.data);
                dispatch(selectSize(res.data));
            }
        )
    }
}
export const selectSize = item => {
    return {
        type: types.SIZE_EDIT,
        payload: item
    }
}
export const updateStatusSizeRequest = (item) => {

    item = {
        ...item,
        status: (item.status*1===1)?0:1
    }
    let id = item.id_size;

    return (dispatch) => {
        return callApi(('sizes/'+id),'PUT', item).then(
            res => {
                dispatch(updateStatusSize(res.data.id_size));
                // console.log(res.data);
            }
        )
    }
  
}
export const updateStatusSize = id => {
    return {
        type: types.UPDATE_STATUS_SIZE,
        payload: id
    }
}
export const deleteSizeRequest = id => {
    return (dispatch) => {
        return callApi(('sizes/'+id),'DELETE',null).then(
            res => {
                 dispatch(deleteSize(id));
            }
        )
        
    }
}
export const deleteSize = id => {
    return {
        type: types.DELETE_SIZE,
        payload: id
    }
}

// hadle for sizes
export const fetchSizeDetailsRequest = () => {
    return (dispatch) => {
        return callApi('size-details','GET',null).then(
            res => {
                dispatch(fetchSizeDetails(res.data));
            }
        )
    }
}
export const fetchSizeDetails = items => {
    return {
        type: types.FETCH_SIZE_DETAILS,
        payload: items
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
export const delItenInCart = (delItem,id_size) => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        payload: delItem,
        size: id_size
    }
}
export const updateQuantityItem = (updateItem, size,quantity) => {
    return {
        type: types.UPDATE_QUANTITY_ITEM,
        payload: updateItem,
        size,
        quantity
    }
}

