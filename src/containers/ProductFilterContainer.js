// import style library, components
import {connect} from 'react-redux';
import ProductFilter from '../components/product/productfilter/ProductFilter';
import ResultFilter from '../components/product/productfilter/resultfilter/ReSultFilter';
import { useParams } from "react-router";
import * as Actions from '../actions/Actions';

// code function here
function MyContainer(props){
    // get props value
    var { products,categories,sizes,images } = props;
    
    // convert id from url to category title
    const { id } = useParams();

    // get title for result filter
    let index = findIndex(categories,id);
    let title = index===-1?'Tất cả các sản phẩm':categories[index].category_name;


    // declare variable
    var ResultFilterUI = () => {
        return (
            <ResultFilter
                titleRec={title}   
                listProductRec={products}
                onAddToCart={props.onAddToCart}
                sizeDetails={props.sizeDetails} 
                images={images}
            />
        )
    }// use for product filter
    var SizesFilterUI = sizes.map((element, index) => {
        return (
            <li key={index}>
                <label>
                    <input type="checkbox" />
                    <span>{element.size_name}</span>
                </label>
            </li>
        )
    });

    // return value 
    return(
            <ProductFilter 
                onResultFilterRec={ResultFilterUI}
                titleRec={title}
                sizesFilterRec={SizesFilterUI}
            />
    );
}
var findIndex = (arr,id) => {
    let result = -1;
    arr.forEach((element, index) => {
        if (element.id_category*1 === id*1) result = index
    });

    return result;
}
const mapStateToProps = state => {
    return {
        products: state.ListProduct,
        categories: state.listCategory,
        sizes: state.listSize,
        sizeDetails: state.listSizeDetail,
        images: state.listImages
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (newItem,id_size) => {
            dispatch(Actions.addToCart(newItem,id_size,1));
        },
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MyContainer)