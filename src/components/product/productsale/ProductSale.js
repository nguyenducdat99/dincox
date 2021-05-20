// import style library, components
import "./ProductSale.scss";
import { useState } from "react";
import * as Actions from "../../../constants/Config";
import ImageZoom from "react-medium-image-zoom";

// code function here
function ProductSale(props) {
  // declare state
  const [amountProduct, setAmountProduct] = useState(4); // amount product show

  // get props
  const { imagesRec, listProduct } = props;

  // filet props
  var imagesFillter = imagesRec.filter((element) => {
    return element.id_new === null;
  });

  // load product list
  var sum = 0; // amount product show (condition)
  var listIndex = listProduct.map((item, index) => {
    if (sum < amountProduct) {
      sum++;
      return item;
    }
    return "";
  });
  // for(let i=0;i<amountProduct;i++) listIndex.push(i);
  // excute when user click button see more
  const onSeeMore = () => {
    setAmountProduct(amountProduct + 4);
  };

  const path1 = makeRandomPath(imagesFillter);
  const path2 = makeRandomPath(imagesFillter);
  const path3 = makeRandomPath(imagesFillter);

  return (
    <>
      <div className="product__sales">
        <h2>SẢN PHẨM KHUYẾN MÃI</h2>
        <div className="product__sales__list">{listIndex}</div>
        <div className="product__sales__expand">
          <button
            type="button"
            disabled={listProduct.length <= amountProduct ? true : false}
            onClick={onSeeMore}
          >
            Xem thêm
          </button>
        </div>
      </div>
      {/* end product sales */}
      <div className="product__banner">
        <div className="product__banner--small">
          {/* <img src={makeRandomPath(imagesFillter)} alt="dincox collection" /> */}
          <ImageZoom
            image={{
              src: path1,
              alt: "dincox collection",
              style: {
                width: "100%",
                height: "100%",
              },
            }}
            zoomImage={{
              src: path1,
              alt: "dincox collection",
            }}
          />
        </div>
        <div className="product__banner--large">
          {/* <img src={makeRandomPath(imagesFillter)} alt="dincox collection" /> */}
          <ImageZoom
            image={{
              src: path2,
              alt: "dincox collection",
              style: {
                width: "100%",
                height: "100%",
              },
            }}
            zoomImage={{
              src: path2,
              alt: "dincox collection",
            }}
          />
        </div>
        <div className="product__banner--small">
          {/* <img src={makeRandomPath(imagesFillter)} alt="dincox collection" /> */}
          <ImageZoom
            image={{
              src: path3,
              alt: "dincox collection",
              style: {
                width: "100%",
                height: "100%",
              },
            }}
            zoomImage={{
              src: path3,
              alt: "dincox collection",
            }}
          />
        </div>
      </div>
      {/* end product banner */}
    </>
  );
}

function makeRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function makeRandomPath(items) {
  let result = "";

  if (items.length === 0) {
    return result;
  } else {
    result =
      result + Actions.API_URL + items[makeRandomIndex(items.length)].path;
  }

  return result;
}

export default ProductSale;
