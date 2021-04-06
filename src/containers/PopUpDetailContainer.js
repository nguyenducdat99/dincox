// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import PopUpDetail from '../components/product/popupdetail/PopUpDetail';

// code function here
function PopUpContainer(props){
    // load data
    useEffect(
        () => {
            props.onFetchSizeDetail();
            // eslint-disable-next-line
        },[]
    )

    // get props 
    var {products, sizeDetails, sizes, categories, onAddToCart, images} = props;  
    
    return(
        <PopUpDetail 
            resetToggleQuickView={props.resetToggleQuickView}
            isToggle={props.isToggle}
            item={props.item}
            productsRec={products}
            sizeDetailsRec={sizeDetails} 
            sizesRec={sizes}
            categoriesRec={categories}
            onAddToCartRec={onAddToCart}
            imagesRec={images}
        />
    );
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