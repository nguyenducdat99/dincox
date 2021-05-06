// import style library, components
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/fixcontents/search/Search';
import SingleProduct from '../components/product/aproduct/Aproduct';
import * as Actions from '../actions/Actions';
import { useState } from 'react';

// code function here
function SearchContainer(props){

    // get props
    const { 
        products,
        sizeDetails,
        images,
        saleDetails,
        onAddToCart
    } = props;
    // delcare state component
    const [keyword, setKeyword] = useState('');

    // onhandle change keyword
    const onHandleChangeKeyWord = keyword => {
        setKeyword(keyword);
    }

    // filter product
    const productsFilter = products.filter(
        element => {
            return element.product_name.toLowerCase().includes(keyword.toLocaleLowerCase());
        }
    )
    // get quantity max
    const listIndex = productsFilter.map((item,index)=>{
        return(
            <SingleProduct 
                key={index} 
                data={item}
                onAddToCartRec={onAddToCart}
                sizeDetailsRec={sizeDetails} 
                imagesRec={images}
                saleDetails={saleDetails}
            />
        )
    })
    
    

    return(
        <Search 
            listIndex={listIndex}    
            setKeywordContainer={onHandleChangeKeyWord}
        />
    );
}

SearchContainer.propTypes = {
    saleDetails: PropTypes.array,
    images: PropTypes.array,
    sizeDetails: PropTypes.array,
    products: PropTypes.array,
    onAddToCart: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        products: state.ListProduct,
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



export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)