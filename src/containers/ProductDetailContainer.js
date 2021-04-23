// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import ProductDetail from '../components/product/productdetail/ProductDetail';
import PropTypes from 'prop-types';

// code function here
function ProductDetailContainer(props){
    // get props 
    const { 
        products, 
        sizeDetails, 
        sizes, 
        categories, 
        onAddToCart, 
        images,
        onFetchImage,
        onFetchSizeDetail,
        onFetchProduct,
        saleDetails
    } = props;  

    // load data
    useEffect(
        () => {
            onFetchProduct();
            onFetchSizeDetail();
            onFetchImage();
            // eslint-disable-next-line
        },[]
    )


    return(
        <ProductDetail 
            productsRec={products}
            sizeDetailsRec={sizeDetails} 
            sizesRec={sizes}
            categoriesRec={categories}
            onAddToCartRec={onAddToCart}
            imagesRec={images}
            saleDetails={saleDetails}
        />
    );
}

ProductDetailContainer.propTypes = {
    products: PropTypes.array, 
    sizeDetails: PropTypes.array, 
    sizes: PropTypes.array, 
    categories: PropTypes.array, 
    onAddToCart: PropTypes.func, 
    images: PropTypes.array,
    onFetchImage: PropTypes.func,
    onFetchSizeDetail: PropTypes.func,
    onFetchProduct: PropTypes.func,
    saleDetails: PropTypes.array
}

const mapStateToProps = (state) =>{
    return {
        products: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        sizes: state.listSize,
        categories: state.listCategory,
        images: state.listImages,
        saleDetails: state.saleDetails
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
        onAddToCart: (newItem,id_size,quantity) => {
            dispatch(Actions.addToCart(newItem,id_size,quantity));
        },
        onFetchImage: () => {
            dispatch(Actions.fetchImageRequest());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailContainer)