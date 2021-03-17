// import style library, components
import {connect} from 'react-redux';
import ProductSale from '../components/product/productsale/ProductSale';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';

// code function here
function ProductSaleContainer(props){
    // get props
    var { listProductSale,sizeDetails,images } = props;

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
            />);
        }
    });


    
    return(
        <ProductSale listProduct={listIndex} />
    );
}

const mapStateToProps = (state) => {
    return {
        listProductSale: state.ListProduct,
        sizeDetails: state.listSizeDetail,
        images: state.listImages
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (newItem,id_size) => {
            dispatch(Actions.addToCart(newItem,id_size,1));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductSaleContainer)