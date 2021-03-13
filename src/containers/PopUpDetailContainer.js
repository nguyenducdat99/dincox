// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import PopUpDetail from '../components/product/popupdetail/PopUpDetail';

// code function here
function MyContainer(props){
    // load data
    useEffect(
        () => {
            props.onFetchSizeDetail();
            // eslint-disable-next-line
        },[]
    )

    // get props 
    var { products, sizeDetails, sizes, categories} = props;  
    
    return(
        <PopUpDetail 
            resetToggleQuickView={props.resetToggleQuickView}
            isToggle={props.isToggle}
            item={props.item}
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
        onFetchSizeDetail: () => {
            dispatch(Actions.fetchSizeDetailsRequest())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MyContainer)