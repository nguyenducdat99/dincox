// import style library, components
import { connect } from "react-redux";
import Checkout from "../components/checkout/Checkout";
import * as Actions from "../actions/Actions";
import * as MyConst from "../constants/Config";
import * as ConvertState from "../commons/HandleState";

// code function here
function CheckoutContainer(props) {
  // get props
  const {
    onAddInfoCheckout,
    info,
    cart,
    images,
    sizes,
    onAddCheckout,
    sizeDetails,
    loginedAccount,
    saleDetails,
  } = props;

  // return list item ui
  const listItem = cart.map((element, index) => {
    // get size name
    const sizeName = findSizeName(sizes, element.size);

    // get path
    let path = findImages(images, element.product.id_product);

    // convert path
    path = "" + MyConst.API_URL + path[0];

    // get discount
    let discount = 0;
    if (element.product.is_sale && saleDetails.length > 0)
      discount =
        ConvertState.findDiscountForProduct(
          element.product.id_product,
          saleDetails
        ).length > 0
          ? ConvertState.findDiscountForProduct(
              element.product.id_product,
              saleDetails
            )[0].discount
          : discount;

    // get factor
    const factor = element.product.is_sale ? (100 - discount) / 100 : 1;

    return (
      <tr key={index}>
        <td>
          <div className="item">
            <div className="item__item-image">
              <img src={path} alt={element.product.product_name} />
              <div className="item__quantity">{element.quantity}</div>
            </div>
            <div className="item__item-info">
              <p>{element.product.product_name}</p>
              <p>size: {sizeName}</p>
            </div>
          </div>
        </td>
        <td>
          <p> {element.product.price * factor * element.quantity} đ</p>
        </td>
      </tr>
    );
  });

  // get total
  const total = totalAmount(cart, saleDetails);

  // return ui
  return (
    <Checkout
      onAddInfoCheckoutRec={onAddInfoCheckout}
      infoRec={info}
      listItemRec={listItem}
      totalRec={total}
      cartRec={cart}
      onAddCheckoutRec={onAddCheckout}
      sizeDetailsRec={sizeDetails}
      loginedAccountRec={loginedAccount}
      saleDetails={saleDetails}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    loginedAccount: state.loginedAccount,
    info: state.infoCheckout,
    cart: state.cart,
    sizes: state.listSize,
    images: state.listImages,
    sizeDetails: state.listSizeDetail,
    saleDetails: state.saleDetails,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddInfoCheckout: (info) => {
      dispatch(Actions.addCheckout(info));
    },
    onAddCheckout: (item, newQuantity, saleDetails) => {
      dispatch(Actions.addCheckoutRequest(item, newQuantity, saleDetails));
    },
  };
};

function findSizeName(items, id_size) {
  let result = "";
  items.forEach((element) => {
    if (element.id_size === id_size) result = element.size_name;
  });

  return result;
}

function findImages(items, id) {
  let result = [];

  items.sort(function (a, b) {
    return b.id_image - a.id_image;
  });

  items.forEach((element) => {
    if (element.id_product * 1 === id * 1) result.push(element.path);
  });

  return result;
}

function totalAmount(cart, saleDetails) {
  let result = 0;
  cart.forEach((element) => {
    let discount = 0;
    if (element.product.is_sale && saleDetails.length > 0)
      discount =
        ConvertState.findDiscountForProduct(
          element.product.id_product,
          saleDetails
        ).length > 0
          ? ConvertState.findDiscountForProduct(
              element.product.id_product,
              saleDetails
            )[0].discount
          : discount;

    const factor = element.product.is_sale ? (100 - discount) / 100 : 1;

    result += element.product.price * element.quantity * factor;
  });

  return result;
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
