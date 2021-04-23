// import style library, components
import {connect} from 'react-redux';
import ProductHightlight from '../components/product/producthightlight/ProductHightlight';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';
import PropTypes from 'prop-types';

// code function here
function ProductHightlightContainer(props){

    // get props
    const { 
        listProductHightLight,
        sizeDetails,
        images,
        saleDetails
    } = props;

    // get quantity max
    const quantityMax = 8;
    var quantity = 0;
    const listIndex = listProductHightLight.map((item,index)=>{
        if(quantity < quantityMax&&item.status===1){
            quantity = quantity + 1;
            return(
                <SingleProduct 
                    key={index} 
                    data={item}
                    onAddToCartRec={props.onAddToCart}
                    sizeDetailsRec={sizeDetails} 
                    imagesRec={images}
                    saleDetails={saleDetails}
                />
            )
        }
        return '';
    })
    

    return(
        <ProductHightlight listProduct={listIndex} />
    );
}

ProductHightlightContainer.propTypes = {
    saleDetails: PropTypes.array,
    images: PropTypes.array,
    sizeDetails: PropTypes.array,
    listProductHightLight: PropTypes.array
}

const mapStateToPropsProductHightlight = (state) => {
    return {
        listProductHightLight: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        images: state.listImages,
        saleDetails: state.saleDetails
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (newItem,id_size) => {
            dispatch(Actions.addToCart(newItem,id_size,1));
        },
    }
};

export default connect(mapStateToPropsProductHightlight,mapDispatchToProps)(ProductHightlightContainer)