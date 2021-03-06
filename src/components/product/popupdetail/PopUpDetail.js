import "./PopUpDetail.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as constants from "../../../constants/Config";

function PopUpDetail(props) {
  // declare state and variable
  const [sizeSelected, setSizeSelected] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  // get props
  const {
    item,
    sizeDetailsRec,
    sizesRec,
    onAddToCartRec,
    imagesRec,
    resetToggleQuickView,
    discount,
  } = props;

  // get data from props
  const { id_product, product_name, price, is_sale } = item;

  // load state data from database local
  useEffect(() => {
    setIsToggle(props.isToggle ? true : false);
  }, [props.isToggle]);

  // active ui
  const onToggle = () => {
    setIsToggle(!isToggle);
    resetToggleQuickView();
  };

  // get list size of product
  const listSizeSelect = sizeDetailsRec.filter((element) => {
    return element.id_product * 1 === id_product * 1;
  });

  // get max quantity product from selected size
  const quantityMax = listSizeSelect[sizeSelected]
    ? listSizeSelect[sizeSelected].quantity
    : 0;
  if (quantity > quantityMax) setQuantity(quantityMax);

  // get list size name of product
  const listSizeSelectName = listSizeSelect.map((element, index) => {
    return findSizeName(sizesRec, element.id_size);
  });

  // return list size name ui
  const listSizeSelectNameUi = listSizeSelectName.map((element, index) => (
    <div
      key={index}
      className={
        "product-detail__content__size__one-select " +
        (index === sizeSelected
          ? "product-detail__content__size__active-select"
          : "")
      }
      onClick={() => {
        setSizeSelected(index);
      }}
    >
      {element}
    </div>
  ));

  // hanle when click add to cart
  const addToCart = () => {
    onAddToCartRec(item, listSizeSelect[sizeSelected].id_size, quantity);
    alert("Thêm vào giỏ thành công!");
  };

  // // get images for item
  const path = findImages(imagesRec, id_product);

  // return list image
  const listSmallImage = path.map((element, index) => {
    return (
      <div key={index} className="product-detail__list-image__image">
        <img
          src={"" + constants.API_URL + element}
          alt={"dincox small " + index}
          onClick={() => {
            setMainImage("" + constants.API_URL + element);
          }}
        />
      </div>
    );
  });

  // conver path
  useEffect(() => {
    if (path[0]) setMainImage("" + constants.API_URL + path[0]);
    // eslint-disable-next-line
  }, []);

  return (
    // product detail
    <div
      className={
        isToggle ? "pop-up-detail__wrapper" : "pop-up-detail__wrapper--hidden"
      }
    >
      <div className="pop-up-detail">
        <div className="wrapper">
          <div className="pop-up-detail__button" onClick={onToggle}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="product-detail-grid">
            {/* open main */}
            <div className="product-detail__main-image">
              <div className="product-detail__main-image__image">
                <img src={mainImage} alt="dincox demo" />
              </div>
              {/* open list small */}
              <div className="product-detail__list-image">{listSmallImage}</div>
              {/* close list small */}
            </div>
            {/* close main */}

            {/* open product detail content */}
            <div className="product-detail__content">
              {/* open product detail content header */}
              <div className="product-detail__content__header">
                <h2>{product_name}</h2>
                <div className="product-detail__content__header__code">
                  <p>Mã sản phẩm: {"Dincox" + id_product}</p>
                </div>
              </div>
              {/* close product detail content header */}

              {/* open product detail content price */}
              {is_sale && discount !== 0 ? (
                <div className="product-detail__content__price">
                  <div className="product-detail__content__price__current-price">
                    <p>
                      {(price * (100 - discount)) / 100} <u>đ</u>
                    </p>
                  </div>
                  <div className="product-detail__content__price__original-price">
                    <del>
                      {price}
                      <u>đ</u>
                    </del>
                  </div>
                  <div className="product-detail__content__price__sale">
                    <p>
                      (Bạn đã tiết kiệm được {(price * discount) / 100}
                      <u>đ</u>)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="product-detail__content__price">
                  <div className="product-detail__content__price__current-price">
                    <p>
                      {price} <u>đ</u>
                    </p>
                  </div>
                </div>
              )}
              {/* close product detail content price */}

              {/* open form select product */}
              <form action="" method="">
                <div className="product-detail__content__size">
                  <div className="product-detail__content__size__title">
                    <p>{quantityMax === 0 ? "Hết hàng" : "Kích thước"}</p>
                  </div>
                  <div className="product-detail__content__size__select">
                    {listSizeSelectNameUi}
                  </div>
                </div>
                <div className="product-detail__content__count">
                  <div className="product-detail__content__count__title">
                    <p> Số lượng </p>
                  </div>
                  <div className="product-detail__content__count_select">
                    <input
                      type="button"
                      value="-"
                      onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                      }}
                    />
                    <input type="number" value={quantity} disabled />
                    <input
                      type="button"
                      value="+"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity < quantityMax ? false : true}
                    />
                  </div>
                </div>
                <div className="product-detail__content__action">
                  <input
                    type="button"
                    value="Thêm vào giỏ"
                    onClick={addToCart}
                    disabled={quantityMax !== 0 ? false : true}
                  />
                  <p>
                    Hoặc{" "}
                    <Link to={"/products/" + id_product}>xem chi tiết</Link>
                  </p>
                </div>
              </form>
              {/* close form select product */}
            </div>
            {/* close product detail content */}
          </div>
        </div>
      </div>
    </div>
  );
}

function findSizeName(items, id) {
  let result = "";
  items.forEach((element, index) => {
    if (element.id_size * 1 === id * 1) result = element.size_name;
  });

  return result;
}

function findImages(items, id) {
  let result = [];
  items.forEach((element) => {
    if (element.id_product * 1 === id * 1) result.push(element.path);
  });

  result.sort(function (a, b) {
    return a.id_image - b.id_image;
  });

  return result;
}

export default PopUpDetail;
