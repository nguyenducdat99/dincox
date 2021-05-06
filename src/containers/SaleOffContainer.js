// import style library, components
import {connect} from 'react-redux';
import SaleOff from '../components/fixcontents/saleoff/SaleOff';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';
import PropTypes from 'prop-types';

// code function here
function SaleOffContainer(props){
    // get props
    const { 
        listProductSale,
        sizeDetails,
        images,
        saleDetails
    } = props;

    // return product ui
    var listIndex = [];
    listProductSale.forEach((item,index) => {
        if(item.status===1&&item.is_sale===1){
            listIndex.push(<SingleProduct 
                key={index} 
                data={item}
                onAddToCartRec={props.onAddToCart}
                sizeDetailsRec={sizeDetails} 
                imagesRec={images}
                saleDetails={saleDetails}
            />);
        }
    });


    
    return(
        <SaleOff
            listIndex={listIndex} 
            imagesRec={images}
            saleDetails={saleDetails}
        />
    );
}

SaleOffContainer.propTypes = {
    images: PropTypes.array,
    sizeDetails: PropTypes.array,
    listProductSale: PropTypes.array,
    saleDetails: PropTypes.array
}


const mapStateToProps = state => {
    return {
        listProductSale: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        images: state.listImages,
        saleDetails: state.saleDetails
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (newItem,id_size) => {
            dispatch(Actions.addToCart(newItem,id_size,1));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(SaleOffContainer)