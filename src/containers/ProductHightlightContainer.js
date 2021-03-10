// import style library, components
import {connect} from 'react-redux';
import ProductHightlight from '../components/product/producthightlight/ProductHightlight';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import callApi from '../utils/ApiCaller';

// code function here
function ProductHightlightContainer(props){
    useEffect(
        () => {
            callApi('products','GET',null).then(
                res => {
                    props.onFetchProduct(res.data);
                }
            )
            // eslint-disable-next-line
        },[]
    )
    // declare state
    var { listProductHightLight } = props;
    var listIndex = listProductHightLight.map((item,index)=>{
        if(item.is_active&&!item.is_sale){
            return(
                <SingleProduct 
                    key={index} 
                    data={item}
                    onAddToCartRec={props.onAddToCart}
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
        listProductHightLight: state.ListProduct
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProduct: products => {
            dispatch(Actions.fetchProduct(products))
        },
        onAddToCart: newItem => {
            dispatch(Actions.addToCart(newItem,'38',1));
        }
    }
};

export default connect(mapStateToPropsProductHightlight,mapDispatchToProps)(ProductHightlightContainer)