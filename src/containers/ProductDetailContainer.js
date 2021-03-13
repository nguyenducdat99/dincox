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
            // eslint-disable-next-line
        },[]
    )

    // get props 
    var { products, sizeDetails, sizes, categories} = props;  
    
    return(
        <ProductDetail 
            productsRec={products}
            sizeDetailsRec={sizeDetails} 
            sizesRec={sizes}
            categoriesRec={categories}
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
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductHightlightContainer)