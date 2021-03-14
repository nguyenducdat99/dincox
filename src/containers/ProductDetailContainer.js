// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import ProductDetail from '../components/product/productdetail/ProductDetail';

// code function here
function ProductHightlightContainer(props){
    // load data
    useEffect(
        () => {
            props.onFetchProduct();
            props.onFetchSizeDetail();
            props.onFetchSize();
            // eslint-disable-next-line
        },[]
    )

    // get props 
    var { products, sizeDetails, sizes, categories, onAddToCart } = props;  
    
    return(
        <ProductDetail 
            productsRec={products}
            sizeDetailsRec={sizeDetails} 
            sizesRec={sizes}
            categoriesRec={categories}
            onAddToCartRec={onAddToCart}
        />
    );
}

const mapStateToProps = (state) =>{
    return {
        products: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        sizes: state.listSize,
        categories: state.listCategory
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProduct: () => {
            dispatch(Actions.fetchProductRequest())
        },
        onFetchSizeDetail: () => {
            dispatch(Actions.fetchSizeDetailsRequest())
        },
        onFetchSize: () => {
            dispatch(Actions.fetchSizesRequest());
        },
        onAddToCart: (newItem,id_size,quantity) => {
            dispatch(Actions.addToCart(newItem,id_size,quantity));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductHightlightContainer)