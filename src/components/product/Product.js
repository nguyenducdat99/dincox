// import style library
import './Product.scss';
import ProductSaleContainer from '../../containers/ProductSaleContainer';
import ProductHightlightContainer from '../../containers/ProductHightlightContainer';
import ProductCollection from './productcollection/ProductCollection';

function Product() {

    return(
        <div className="product">
            <div className="wrapper">
                {/* import component here */}
                    <ProductSaleContainer />
                    <ProductHightlightContainer />
                    <ProductCollection />
                {/* import component here */}
            </div>
            
        </div>
    );
}
export default Product;