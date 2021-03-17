// import style library, components
import {connect} from 'react-redux';
import ProductHightlight from '../components/product/producthightlight/ProductHightlight';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';

// code function here
function ProductHightlightContainer(props){
    useEffect(
        () => {
            props.onFetchProduct();
            props.onFetchSizeDetail();
            props.onFetchImage();
            // eslint-disable-next-line
        },[]
    )
    
    // get props
    var { listProductHightLight,sizeDetails,images } = props;

    // get quantity max
    var quantityMax = 8;
    var quantity = 0;
    var listIndex = listProductHightLight.map((item,index)=>{
        if(quantity < quantityMax&&item.status===1){
            quantity = quantity + 1;
            return(
                <SingleProduct 
                    key={index} 
                    data={item}
                    onAddToCartRec={props.onAddToCart}
                    sizeDetailsRec={sizeDetails} 
                    imagesRec={images}
                    
                />
            )
        }
        return '';
    })
    

    return(
        <ProductHightlight listProduct={listIndex} />
    );
}

const mapStateToPropsProductHightlight = (state) => {
    return {
        listProductHightLight: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        images: state.listImages
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProduct: () => {
            dispatch(Actions.fetchProductRequest())
        },
        onFetchSizeDetail: () => {
            dispatch(Actions.fetchSizeDetailsRequest())
        }
        ,
        onAddToCart: (newItem,id_size) => {
            dispatch(Actions.addToCart(newItem,id_size,1));
        },
        onFetchImage: () => {
            dispatch(Actions.fetchImageRequest());
        }
    }
};

export default connect(mapStateToPropsProductHightlight,mapDispatchToProps)(ProductHightlightContainer)