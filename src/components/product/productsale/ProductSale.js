// import style library
import './ProductSale.scss';

// code function here
function ProductSale(){
    return(
        <>
            <div className="product__sales">
                <h2>SẢN PHẨM KHUYẾN MÃI</h2>
                
            </div>
            {/* end product sales */}
            <div className="product__banner">
                    <div className="product__banner--small">
                        <img src={SmallImg} alt="" />
                    </div>
                    <div className="product__banner--large">
                        <img src={LargeImg} alt="" />
                    </div>
                    <div className="product__banner--small">
                        <img src={SmallImg} alt="" />
                    </div>
                </div>
            {/* end product banner */}
        </>
    );
}
export default ProductSale;