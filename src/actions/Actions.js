import * as types from "../constants/ActionTypes";
import callApi from "../utils/ApiCaller";
import * as ConvertState from "../commons/HandleState";

// action for products
export const fetchProductRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      if (!res) return console.log("Lỗi mất dữ liệu!");

      dispatch(fetchProduct(res.data));
    });
  };
};
export const fetchProduct = (products) => {
  return {
    type: types.FETCH_PRODUCT,
    payload: products,
  };
};

export const saveProductRequest = (item) => {
  //   console.log({ item });

  item = {
    ...item,
    status: item.status * 1,
  };
  let id = item.id_product;

  if (id !== "") {
    return (dispatch) => {
      return callApi("products/" + id, "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveProduct(res.data));
      });
    };
  } else {
    return (dispatch) => {
      return callApi("products", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveProduct(res.data));
      });
    };
  }
};
export const saveProduct = (items) => {
  return {
    type: types.SAVE_PRODUCT,
    payload: items,
  };
};

export const selectProductRequest = (id) => {
  return (dispatch) => {
    return callApi("products/" + id, "GET", id).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(selectProduct(res.data));
    });
  };
};
export const selectProduct = (item) => {
  return {
    type: types.PRODUCT_EDIT,
    payload: item,
  };
};
export const updateStatusProductRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  let id = item.id_product;

  return (dispatch) => {
    return callApi("products/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateStatusProduct(res.data.id_product));
    });
  };
};
export const updateStatusProduct = (id) => {
  return {
    type: types.UPDATE_STATUS_PRODUCT,
    payload: id,
  };
};

export const updateSaleProductRequest = (item) => {
  item = {
    ...item,
    is_sale: item.is_sale * 1 === 1 ? 0 : 1,
  };
  let id = item.id_product;

  return (dispatch) => {
    return callApi("products/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateSaleProduct(res.data.id_product));
    });
  };
};
export const updateSaleProduct = (id) => {
  return {
    type: types.UPDATE_SALE_PRODUCT,
    payload: id,
  };
};

// actions for article
export const fetchArticleRequest = () => {
  return (dispatch) => {
    return callApi("news", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");
      dispatch(fetchArticle(res.data));
      // console.log(res.data);
    });
  };
};
export const fetchArticle = (items) => {
  return {
    type: types.FETCH_ARTICLE,
    payload: items,
  };
};

export const saveArticleRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1,
  };
  const id = item.id_new;

  if (id !== "") {
    return (dispatch) => {
      return callApi("news/" + id, "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");
        dispatch(saveArticle(res.data));
      });
    };
  } else {
    return (dispatch) => {
      return callApi("news", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveArticle(res.data));
      });
    };
  }
};
export const saveArticle = (newArticle) => {
  return {
    type: types.SAVE_ARTICLE,
    payload: newArticle,
  };
};

export const selectArticleRequest = (id) => {
  return (dispatch) => {
    return callApi("news/" + id, "GET", id).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(selectArticle(res.data));
    });
  };
};
export const selectArticle = (item) => {
  return {
    type: types.ARTICLE_EDIT,
    payload: item,
  };
};

export const updateStatusArticleRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  let id = item.id_new;

  return (dispatch) => {
    return callApi("news/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateStatusArticle(res.data.id_new));
    });
  };
};
export const updateStatusArticle = (id) => {
  return {
    type: types.UPDATE_STATUS_ARTICLE,
    payload: id,
  };
};

// action for account
export const fetchAccountRequest = () => {
  return (dispatch) => {
    return callApi("accounts", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchAccount(res.data));
    });
  };
};

export const fetchAccount = (items) => {
  return {
    type: types.FECTH_ACCOUNT,
    payload: items,
  };
};
export const listAccount = () => {
  return {
    type: types.LIST_ACCOUNT,
  };
};
export const saveAccountRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1,
  };
  let id = item.id_account;

  if (id !== "") {
    return (dispatch) => {
      return callApi("accounts/" + id, "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");
        dispatch(saveAccount(res.data));
      });
    };
  } else {
    return (dispatch) => {
      return callApi("accounts", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveAccount(res.data));
      });
    };
  }
};
export const saveAccount = (newAccount) => {
  return {
    type: types.SAVE_ACCOUNT,
    payload: newAccount,
  };
};

export const updateStatusAccountRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  let id = item.id_account;

  return (dispatch) => {
    return callApi("accounts/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateStatusAccount(res.data.id_account));
    });
  };
};
export const updateStatusAccount = (id_account) => {
  return {
    type: types.UPDATE_STATUS_ACCOUNT,
    payload: id_account,
  };
};

export const deleteAccountRequest = (id_account) => {
  return (dispatch) => {
    return callApi("accounts/" + id_account, "DELETE", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(deleteAccount(id_account));
    });
  };
};
export const deleteAccount = (id_account) => {
  return {
    type: types.DELETE_ACCOUNT,
    payload: id_account,
  };
};

export const selectAccountRequest = (id) => {
  return (dispatch) => {
    return callApi("accounts/" + id, "GET", id).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(selectAccount(res.data));
    });
  };
};
export const selectAccount = (account) => {
  return {
    type: types.ACCOUNT_EDIT,
    payload: account,
  };
};

export const loginAccountRequest = (account) => {
  return (dispatch) => {
    return callApi("login", "POST", account).then((res) => {
      dispatch(loginAccount(res.data));
    });
  };
};
export const loginAccount = (info) => {
  return {
    type: types.LOGIN_ACCOUNT,
    payload: info,
  };
};

export const logoutAccount = () => {
  return {
    type: types.LOGOUT_ACCOUNT,
  };
};

export const registerAccountRequest = (data) => {
  return (dispatch) => {
    return callApi("register", "POST", data).then((res) => {
      dispatch(registerAccount(res.data));
    });
  };
};

export const registerAccount = (data) => {
  return {
    type: types.REGISTER_ACCOUNT,
    payload: data,
  };
};

// action for category
export const fetchCategoriesRequest = () => {
  return (dispatch) => {
    return callApi("categories", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchCategories(res.data));
    });
  };
};
export const fetchCategories = (items) => {
  return {
    type: types.FETCH_CATEGORIES,
    payload: items,
  };
};

export const saveCategoryRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1,
  };
  let id = item.id_category;

  if (id !== "") {
    return (dispatch) => {
      return callApi("categories/" + id, "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveCategory(res.data));
        // console.log(res.data);
      });
    };
  } else {
    return (dispatch) => {
      return callApi("categories", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveCategory(res.data));
      });
    };
  }
};
export const saveCategory = (item) => {
  return {
    type: types.SAVE_CATEGORY,
    payload: item,
  };
};
export const selectCategoryRequest = (id) => {
  return (dispatch) => {
    return callApi("categories/" + id, "GET", null).then((res) => {
      if (!res) return console.log("get data failed");
      dispatch(selectCategory(res.data));
    });
  };
};
export const selectCategory = (item) => {
  return {
    type: types.CATEGORY_EDIT,
    payload: item,
  };
};
export const updateStatusCategoryRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  let id = item.id_category;

  return (dispatch) => {
    return callApi("categories/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateStatusCategory(res.data.id_category));
    });
  };
};
export const updateStatusCategory = (id) => {
  return {
    type: types.UPDATE_STATUS_CATEGORY,
    payload: id,
  };
};

export const deleteCategoryRequest = (id) => {
  return (dispatch) => {
    return callApi("categories/" + id, "DELETE", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(deleteCategory(id));
    });
  };
};
export const deleteCategory = (id) => {
  return {
    type: types.DELETE_CATEGORY,
    payload: id,
  };
};

// action for size
export const fetchSizesRequest = () => {
  return (dispatch) => {
    return callApi("sizes", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchSizes(res.data));
    });
  };
};
export const fetchSizes = (items) => {
  return {
    type: types.FETCH_SIZES,
    payload: items,
  };
};

export const saveSizeRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1,
  };
  let id = item.id_size;

  if (id !== "") {
    return (dispatch) => {
      return callApi("sizes/" + id, "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveSize(res.data));
        // console.log(res.data);
      });
    };
  } else {
    return (dispatch) => {
      return callApi("sizes", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveSize(res.data));
      });
    };
  }
};
export const saveSize = (item) => {
  return {
    type: types.SAVE_SIZE,
    payload: item,
  };
};
export const selectSizeRequest = (id) => {
  return (dispatch) => {
    return callApi("sizes/" + id, "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(selectSize(res.data));
    });
  };
};
export const selectSize = (item) => {
  return {
    type: types.SIZE_EDIT,
    payload: item,
  };
};
export const updateStatusSizeRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  let id = item.id_size;

  return (dispatch) => {
    return callApi("sizes/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(updateStatusSize(res.data.id_size));
      // console.log(res.data);
    });
  };
};
export const updateStatusSize = (id) => {
  return {
    type: types.UPDATE_STATUS_SIZE,
    payload: id,
  };
};
export const deleteSizeRequest = (id) => {
  return (dispatch) => {
    return callApi("sizes/" + id, "DELETE", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(deleteSize(id));
    });
  };
};
export const deleteSize = (id) => {
  return {
    type: types.DELETE_SIZE,
    payload: id,
  };
};

// action for size detail
export const fetchSizeDetailsRequest = () => {
  return (dispatch) => {
    return callApi("size-details", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchSizeDetails(res.data));
    });
  };
};
export const fetchSizeDetails = (items) => {
  return {
    type: types.FETCH_SIZE_DETAILS,
    payload: items,
  };
};

export const saveSizeDetailsRequest = (item, type) => {
  item = {
    ...item,
    status: item.status * 1,
  };

  if (type) {
    return (dispatch) => {
      return callApi("size-details", "POST", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveSizeDetail(res.data));
        // console.log(res.data);
      });
    };
  } else {
    return (dispatch) => {
      return callApi("size-details", "PUT", item).then((res) => {
        if (!res) return console.log("get data failed");

        dispatch(saveSizeDetail(res.data));
      });
    };
  }
};
export const saveSizeDetail = (item) => {
  return {
    type: types.SAVE_SIZE_DETAIL,
    payload: item,
  };
};

// action for sale
export const fetchSaleRequest = () => {
  return (dispatch) => {
    return callApi("sales", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchSale(res.data));
    });
  };
};
export const fetchSale = (items) => {
  return {
    type: types.FETCH_SALES,
    payload: items,
  };
};
export const saveSaleRequest = (item) => {
  if (item.id_sale === -1) {
    return (dispatch) => {
      return callApi("sales", "POST", item).then((res) => {
        if (!res) return console.log("add data failed");

        dispatch(saveSale(res.data));
      });
    };
  }
  return (dispatch) => {
    return callApi("sales/" + item.id_sale, "PUT", item).then((res) => {
      if (!res) return console.log("update data failed");
      dispatch(saveSale(res.data));
    });
  };
};
export const saveSale = (item) => {
  return {
    type: types.SAVE_SALE,
    payload: item,
  };
};

export const selectSaleRequest = (id) => {
  return (dispatch) => {
    return callApi("sales/" + id, "GET", null).then((res) => {
      if (!res) return console.log("get sale detail failed");

      dispatch(selectSale(res.data));
    });
  };
};

export const selectSale = (item) => {
  return {
    type: types.SALE_EDIT,
    payload: item,
  };
};

export const updateStatusSaleRequest = (item) => {
  item = {
    ...item,
    status: item.status * 1 === 1 ? 0 : 1,
  };
  const id = item.id_sale;

  return (dispatch) => {
    return callApi("sales/" + id, "PUT", item).then((res) => {
      if (!res) return console.log("update status sale failed");

      dispatch(updateStatusSale(res.data.id_sale));
      // console.log(res.data);
    });
  };
};
export const updateStatusSale = (id) => {
  return {
    type: types.UPDATE_STATUS_SALE,
    payload: id,
  };
};

export const addSaleForProduct = (data) => {
  return (dispatch) => {
    return callApi("sale-details", "POST", data).then((res) => {
      if (!res) return console.log("get sale detail failed");
      alert("Thêm khuyến mại thành công.");
      dispatch(saveSaleDetail(res.data));
    });
  };
};

export const fetchSaleDetailRequest = () => {
  return (dispatch) => {
    return callApi("sale-details", "GET", null).then((res) => {
      if (!res) return console.log("get sale detail failed");

      dispatch(fetchSaleDetail(res.data));
    });
  };
};

export const fetchSaleDetail = (data) => {
  return {
    type: types.FETCH_SALE_DETAILS,
    payload: {
      message: "get sale detail complete",
      data: data,
    },
  };
};

export const saveSaleDetail = (data) => {
  return {
    type: types.SAVE_SALE_DETAIL,
    payload: data,
  };
};

// action for image
export const fetchImageRequest = () => {
  return (dispatch) => {
    return callApi("collections", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchImage(res.data));
      // console.log(res);
    });
  };
};
export const fetchImage = (items) => {
  return {
    type: types.FETCH_IMAGES,
    payload: items,
  };
};

export const saveImageRequest = (item) => {
  return (dispatch) => {
    return callApi("collections", "POST", item).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(saveImage(res.data));
      // console.log(res.data);
    });
  };
};
export const saveImage = (item) => {
  return {
    type: types.SAVE_IMAGES,
    payload: item,
  };
};

// handle for status form
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};

// action for cart
export const addToCart = (newItem, size, quantity) => {
  return {
    type: types.ADD_TO_CART,
    payload: newItem,
    size,
    quantity,
  };
};
export const delItenInCart = (delItem, id_size) => {
  return {
    type: types.DELETE_ITEM_IN_CART,
    payload: delItem,
    size: id_size,
  };
};
export const updateQuantityItem = (updateItem, size, quantity) => {
  return {
    type: types.UPDATE_QUANTITY_ITEM,
    payload: updateItem,
    size,
    quantity,
  };
};

export const deleteCart = () => {
  return {
    type: types.DELETE_CART,
  };
};

// action for checkout
export const addCheckout = (info) => {
  return {
    type: types.ADD_CHECKOUT,
    payload: info,
  };
};

export const deleteCheckout = () => {
  return {
    type: types.DELETE_CHECKOUT,
  };
};

export const addCheckoutRequest = (item, newQuantity, saleDetails) => {
  return (dispatch) => {
    // update for tbl orders
    callApi("orders", "POST", item).then((res) => {
      if (!res) return console.log("get data failed");

      let newCart = [];

      item.cart.forEach((element) => {
        let itemCart = [];
        let discount = 0;
        if (element.product.is_sale && saleDetails.length > 0)
          discount = ConvertState.findDiscountForProduct(
            element.product.id_product,
            saleDetails
          )[0].discount;

        itemCart.push(res.data.id_order);
        itemCart.push(element.product.id_product);
        itemCart.push(discount);
        itemCart.push(element.size);
        itemCart.push(element.quantity);
        newCart.push(itemCart);
      });

      // update for tblorder detail
      callApi("orders-detail", "POST", newCart).then(() => {
        newQuantity.forEach((element) => {
          callApi("size-details", "PUT", element).then((res) => {
            if (!res) return console.log("get data failed");

            dispatch(saveSizeDetail(res.data));
          });
        });
      });

      // remove cart and receiver infor
      dispatch(deleteCart());
      dispatch(deleteCheckout());

      // router cart
      window.confirm("Thanh toán thành công!");
      window.location = "/";
    });
  };
};

// action for order
export const fetchOrderRequest = (id) => {
  return (dispatch) => {
    return callApi("orders/" + id, "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchOrder(res.data));
    });
  };
};
export const fetchAllOrderRequest = () => {
  return (dispatch) => {
    return callApi("orders", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchOrder(res.data));
    });
  };
};
export const fetchOrder = (items) => {
  return {
    type: types.FETCH_ORDER,
    payload: items,
  };
};
export const fetchDataStatisticsRequest = () => {
  return (dispatch) => {
    return callApi("statistics", "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchDataStatistics(res.data));
    });
  };
};
export const fetchDataStatistics = (items) => {
  return {
    type: types.GET_DATA_STATISTICS,
    payload: items,
  };
};

export const fetchOrderDetailRequest = (id) => {
  return (dispatch) => {
    return callApi("orders-detail/order/" + id, "GET", null).then((res) => {
      if (!res) return console.log("get data failed");

      dispatch(fetchOrderDetail(res.data));
    });
  };
};
export const fetchOrderDetail = (items) => {
  return {
    type: types.FETCH_ORDER_DETAIL,
    payload: items,
  };
};

export const resetOrder = () => {
  return {
    type: types.RESET_ORDER,
  };
};
export const updateStatusOrderRequest = (data) => {
  const id = data.id_order;

  return (dispatch) => {
    return callApi("orders/" + id, "PUT", data).then((res) => {
      if (!res) return console.log("update status order failed");

      dispatch(updateStatusOrder(res.data));
      // console.log(res.data);
    });
  };
};
export const updateStatusOrder = (data) => {
  return {
    type: types.UPDATE_STATUS_ORDER,
    payload: {
      id_order: data.id_order,
      status: data.status,
    },
  };
};
