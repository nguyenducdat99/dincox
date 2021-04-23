// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import PopUpDetail from '../components/product/popupdetail/PopUpDetail';
import PropTypes from 'prop-types';

// code function here
function PopUpContainer(props){
    // get props
    const {
        discount,
        onFetchSizeDetail,
        products, 
        sizeDetails, 
        sizes, 
        categories, 
        onAddToCart, 
        images,
        resetToggleQuickView,
        isToggle,
        item
    } = props;

    // load data
    useEffect(
        () => {
            onFetchSizeDetail();
            // eslint-disable-next-line
        },[]
    )
    
    return(
        <PopUpDetail 
            resetToggleQuickView={resetToggleQuickView}
            isToggle={isToggle}
            item={item}
            productsRec={products}
            sizeDetailsRec={sizeDetails} 
            sizesRec={sizes}
            categoriesRec={categories}
            onAddToCartRec={onAddToCart}
            imagesRec={images}
            discount={discount}
        />
    );
}


PopUpContainer.propTypes = {
    discount: PropTypes.number,
    onFetchSizeDetail: PropTypes.func,
    products: PropTypes.array, 
    sizeDetails: PropTypes.array, 
    sizes: PropTypes.array, 
    categories: PropTypes.array, 
    onAddToCart: PropTypes.func, 
    images: PropTypes.array,
    resetToggleQuickView: PropTypes.func,
    isToggle: PropTypes.bool,
    item: PropTypes.object
}

const mapStateToProps = (state) =>{
    return {
        products: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        sizes: state.listSize,
        categories: state.listCategory,
        images: state.listImages
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchSizeDetail: () => {
            dispatch(Actions.fetchSizeDetailsRequest())
        },
        onAddToCart: (newItem,id_size,quantity) => {
            dispatch(Actions.addToCart(newItem,id_size,quantity));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PopUpContainer)