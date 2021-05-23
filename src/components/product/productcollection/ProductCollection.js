// import style library
import "./ProductCollection.scss";
import * as Actions from "../../../constants/Config";
import ImageZoom from "react-medium-image-zoom";

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

// code function here
function ProductCollection(props) {
  // get props
  const { imagesRec } = props;

  // return list small image
  const listItem = [0, 1, 2, 3, 4, 5].map((element, index) => {
    const path = makeRandomPath(imagesRec);

    return (
      <div key={index} className="product__collection__list-small__single">
        {/* <img src={makeRandomPath(imagesRec)} alt="dincox collection" /> */}
        <ImageZoom
          image={{
            src: path,
            alt: "dincox collection" + element,
            style: {
              width: "100%",
              height: "100%",
            },
          }}
          zoomImage={{
            src: path,
            alt: "dincox collection" + element,
          }}
        />
      </div>
    );
  });

  const pathMain = makeRandomPath(imagesRec);

  return (
    <div className="product__collection">
      <h2>Kho ảnh & video</h2>
      <div className="product__collection-grid">
        <div className="product__collection__list-small">{listItem}</div>
        <div className="product__collection__big">
          {/* <img src={makeRandomPath(imagesRec)} alt="dincox collection" /> */}
          <ImageZoom
            image={{
              src: pathMain,
              alt: "dincox collection",
              style: {
                width: "100%",
                height: "100%",
              },
            }}
            zoomImage={{
              src: pathMain,
              alt: "dincox collection",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductCollection;
