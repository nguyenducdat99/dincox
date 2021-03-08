// import style library
import './Product.scss';
import ProductSale from './productsale/ProductSale';
import ProductHightlightContainer from '../../containers/ProductHightlightContainer';
import ProductCollection from './productcollection/ProductCollection';

function Product() {

    return(
        <div className="product">
            <div className="wrapper">
                {/* import component here */}
                    <ProductSale />
                    <ProductHightlightContainer />
                    <ProductCollection />
                {/* import component here */}
            </div>
            
        </div>
    );
}
export default Product;