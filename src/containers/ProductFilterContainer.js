// import style library, components
import {connect} from 'react-redux';
import ProductFilter from '../components/product/productfilter/ProductFilter';
import ResultFilter from '../components/product/productfilter/resultfilter/ReSultFilter';
import { useParams } from "react-router";
import * as Actions from '../actions/Actions';
import PropTypes from 'prop-types';

// code function here
function ProductFilterContainer(props){
    // get props value
    const { 
        products,
        categories,
        sizes,
        images,
        saleDetails,
        sizeDetails,
        onAddToCart
    } = props;
    
    // convert id from url to category title
    const { id } = useParams();

    // get title for result filter
    const index = findIndex(categories,id);
    const title = index===-1?'Tất cả các sản phẩm':categories[index].category_name;


    // declare variable
    const ResultFilterUI = () => {
        return (
            <ResultFilter
                titleRec={title}   
                listProductRec={products}
                onAddToCart={onAddToCart}
                sizeDetails={sizeDetails} 
                images={images}
                saleDetails={saleDetails}
            />
        )
    }
    const SizesFilterUI = sizes.map((element, index) => {
        return (
            <li key={index}>
                <label>
                    <input type="checkbox" />
                    <span>{element.size_name}</span>
                </label>
            </li>
        )
    });

    // return UI 
    return(
            <ProductFilter 
                onResultFilterRec={ResultFilterUI}
                titleRec={title}
                sizesFilterRec={SizesFilterUI}
            />
    );
}

ProductFilterContainer.propTypes = {
    products: PropTypes.array,
    categories: PropTypes.array,
    sizes: PropTypes.array,
    images: PropTypes.array,
    saleDetails: PropTypes.array,
    onAddToCart: PropTypes.func,
    sizeDetails: PropTypes.array
}

const mapStateToProps = state => {
    return {
        products: state.ListProduct,
        categories: state.listCategory,
        sizes: state.listSize,
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

const findIndex = (arr,id) => {
    let result = -1;
    arr.forEach((element, index) => {
        if (element.id_category*1 === id*1) result = index
    });

    return result;
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductFilterContainer)