// import style library, components
import {connect} from 'react-redux';
import ProductSale from '../components/product/productsale/ProductSale';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';

// code function here
function ProductSaleContainer(props){
    // declare state
    var { listProductSale } = props;
    var listIndex = [];
    listProductSale.forEach((item,index) => {
        if(item.is_active&&item.is_sale){
            listIndex.push(<SingleProduct 
                key={index} 
                data={item}
                onAddToCartRec={props.onAddToCart}
            />);
        }
    });


    
    return(
        <ProductSale listProduct={listIndex} />
    );
}

const mapStateToProps = (state) => {
    return {
        listProductSale: state.ListProduct
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (newItem) => {
            dispatch(Actions.addToCart(newItem,'38',1));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductSaleContainer)