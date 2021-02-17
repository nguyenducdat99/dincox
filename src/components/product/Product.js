// import style library
import './Product.scss';
import ProductSale from './productsale/ProductSale';
import ProductHightlight from './producthightlight/ProductHightlight';
import ProductCollection from './productcollection/ProductCollection';

function Product() {

    return(
        <div className="product">
            <div className="wrapper">
                {/* import component here */}
                    <ProductSale />
                    <ProductHightlight />
                    <ProductCollection />
                {/* import component here */}
            </div>
            
        </div>
    );
}
export default Product;