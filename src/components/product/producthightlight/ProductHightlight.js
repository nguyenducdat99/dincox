// import style library, components
import "./ProductHightlight.scss";

// code function here
function ProductHightlight(props){
    // load product list
    var { listProduct } = props;

    return(
        <div className="product__hightlights">
            <h2>SẢN PHẨM NỔI BẬT</h2>
            {/* <div className="product__hightlights__action">
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>
            </div> */}
            <div className="product__hightlights__list-product">
                {
                    listProduct
                }
            </div>
            
        </div>         
    );
}

export default ProductHightlight;