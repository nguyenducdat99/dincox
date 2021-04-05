import * as types from '../constands/ActionTypes';
import callApi from '../utils/ApiCaller';
// import uploader from '../utils/Uploader';

// handle for products
export const fetchProductRequest = () => {
    return (dispatch) => {
        return callApi('products','GET',null).then(
            res => {
                if (!res) return alert('Lỗi mất dữ liệu!');

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

export const saveProductRequest = (item) => {
  
    item = {
        ...item,
        status: item.status*1
    }
    let id = item.id_product;

    if (id !== ''){
        return (dispatch) => {
            return callApi(('products/'+id),'PUT', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveProduct(res.data));
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('products','POST', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveProduct(res.data));
                }
            )
        }
    }
    
}
export const saveProduct = items => {
    return {
        type: types.SAVE_PRODUCT,
        payload: items
    }
}

export const selectProductRequest = id => {
    return (dispatch) => {
        return callApi(('products/'+id),'GET',id).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(selectProduct(res.data));
            }
        )
    }
}
export const selectProduct = item => {
    return {
        type: types.PRODUCT_EDIT,
        payload: item
    }
}
export const updateStatusProductRequest = (item) => {

    item = {
        ...item,
        status: (item.status*1===1)?0:1
    }
    let id = item.id_product;

    return (dispatch) => {
        return callApi(('products/'+id),'PUT', item).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(updateStatusProduct(res.data.id_product));
            }
        )
    }
  
}
export const updateStatusProduct = id => {
    return {
        type: types.UPDATE_STATUS_PRODUCT,
        payload: id
    }
}

export const updateSaleProductRequest = (item) => {

    item = {
        ...item,
        is_sale: (item.is_sale*1===1)?0:1
    }
    let id = item.id_product;

    return (dispatch) => {
        return callApi(('products/'+id),'PUT', item).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(updateSaleProduct(res.data.id_product));
            }
        )
    }
  
}
export const updateSaleProduct = id => {
    return {
        type: types.UPDATE_SALE_PRODUCT,
        payload: id
    }
}

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');
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
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveAccount(res.data));
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('accounts','POST', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(updateStatusAccount(res.data.id_account));
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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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

export const logoutAccount = () => {
    return {
        type: types.LOGOUT_ACCOUNT
    }
}

// handle for categories
export const fetchCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('categories','GET',null).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveCategory(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('categories','POST', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');
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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(updateStatusCategory(res.data.id_category));
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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveSize(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            return callApi('sizes','POST', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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
 
// hadle for sizes detail
export const fetchSizeDetailsRequest = () => {
    return (dispatch) => {
        return callApi('size-details','GET',null).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

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

export const saveSizeDetailsRequest = (item,type) => {
  
    item = {
        ...item,
        status: item.status*1
    }
    
    console.log(item);
    console.log(type);

    if (type){
        return (dispatch) => {
            return callApi(('size-details'),'POST', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveSizeDetail(res.data));
                    // console.log(res.data);
                }
            )
        }
    } else {
        return (dispatch) => {
            
            return callApi('size-details','PUT', item).then(
                res => {
                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                    dispatch(saveSizeDetail(res.data));
                }
            )
        }
    }
    
}
export const saveSizeDetail = item => {
    return {
        type: types.SAVE_SIZE_DETAIL,
        payload: item
    }
}

// handle for images
export const fetchImageRequest = () => {
    return (dispatch) => {
        return callApi('collections','GET',null).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(fetchImage(res.data));
                // console.log(res);
            }
        )
    }
}
export const fetchImage = items => {
    return {
        type: types.FETCH_IMAGES,
        payload: items
    }
}

export const saveImageRequest = item => {
    return (dispatch) => {
        return callApi(('collections'),'POST', item).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(saveImage(res.data));
                // console.log(res.data);
            }
        )
    }
    
}
export const saveImage = item => {
    return {
        type: types.SAVE_IMAGES,
        payload: item
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

export const deleteCart = () => {
    return {
        type: types.DELETE_CART,
    }
}

// handle for checkout
export const addCheckout = info => {
    return {
        type: types.ADD_CHECKOUT,
        payload: info
    }
}

export const deleteCheckout = () => {
    return {
        type: types.DELETE_CHECKOUT,
    }
}


export const addCheckoutRequest = (item, newQuantity) => {

    return (dispatch) => {
        // update for tbl orders
        callApi('orders','POST', item).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                let newCart = [];

                item.cart.forEach(element => {
                    let itemCart = [];
                    itemCart.push(res.data.id_order);
                    itemCart.push(element.product.id_product);
                    if (element.product.is_sale) {
                        itemCart.push(25);
                    } else {
                        itemCart.push(0);
                    }
                    itemCart.push(element.size);
                    itemCart.push(element.quantity);
                    newCart.push(itemCart);
                });

                // update for tblorder detail
                callApi('orders-detail','POST', newCart).then(
                    () => {
                        console.log(newQuantity);
                        newQuantity.forEach(element => {
                            
                            callApi('size-details','PUT', element).then(
                                res => {
                                    if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                                    dispatch(saveSizeDetail(res.data));
                                }
                            )
                        });
                    }
                )

                // remove cart and receiver infor
                dispatch(deleteCart());
                dispatch(deleteCheckout());

                // router cart
                window.confirm('Thanh toán thành công!')
                window.location = '/';
            }
        )
    }
}


// handle for order
export const fetchOrderRequest = id => {
    return (dispatch) => {
        return callApi(('orders/' + id),'GET',null).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(fetchOrder(res.data));
            }
        )
    }
}
export const fetchOrder = items => {
    return {
        type: types.FETCH_ORDER,
        payload: items
    }
}


export const fetchOrderDetailRequest = id => {
    return (dispatch) => {
        return callApi(('orders-detail/order/' + id),'GET',null).then(
            res => {
                if (!res) return alert('Phát hiện truy cập bất hợp phát!');

                dispatch(fetchOrderDetail(res.data));
            }
        )
    }
}
export const fetchOrderDetail = items => {
    return {
        type: types.FETCH_ORDER_DETAIL,
        payload: items
    }
}

