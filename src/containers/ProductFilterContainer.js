// import style library, components
import {connect} from 'react-redux';
import ProductFilter from '../components/product/productfilter/ProductFilter';
import ResultFilter from '../components/product/productfilter/resultfilter/ReSultFilter';
import { useParams } from "react-router";
import * as Actions from '../actions/Actions';
import PropTypes from 'prop-types';
import * as types from '../constants/ActionTypes';
import { useState } from 'react';

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
    
    // declare state component
    const [sortType, setSortType] = useState(types.NAME_UP);
    const [valFilterPrice, setValFilterPrice] = useState(null);
    const [valFilterSize, setValFilterSize] = useState([]);
    
    // handle change value valFilterPrice
    const onHandleChangePrice = price => {
        setValFilterPrice(price)
    }

    // handle change value valFilerSize
    const onHandleChangeSize = array => {

        setValFilterSize([...array]);
    }
    // get title for result filter
    const index = findIndex(categories,id);
    const title = index===-1?'Tất cả các sản phẩm':categories[index].category_name;

    // filter product using size
    var itemsFilter = (valFilterPrice===null||valFilterPrice*1===0)?
    products:
    onFilterPrice(valFilterPrice,products);
    
    console.log(valFilterPrice,itemsFilter);
    // sort product
    switch (sortType) {
        case types.NAME_UP:
            itemsFilter.sort(sortNameUp);
            break;
        case types.NAME_DOWN:
            itemsFilter.sort(sortNameDown);
            break;
        case types.PRICE_UP:
            itemsFilter.sort(sortPriceUp);
            break;
        case types.PRICE_DOWN:
            itemsFilter.sort(sortPriceDown);
            break;
        default:
            
            break;
    }

    // handle when sort
    const onSort = type => {
        switch (type) {
            case types.NAME_UP:
                setSortType(types.NAME_UP);
                break;
            case types.NAME_DOWN:
                setSortType(types.NAME_DOWN);
                break;
            case types.PRICE_UP:
                setSortType(types.PRICE_UP);
                break;
            case types.PRICE_DOWN:
                setSortType(types.PRICE_DOWN);
                break;
            default:
                
                break;
        }
    }
    // declare variable
    const ResultFilterUI = () => {
        return (
            <ResultFilter
                idCategory={id}
                titleRec={title}   
                listProductRec={itemsFilter}
                onAddToCart={onAddToCart}
                sizeDetails={sizeDetails} 
                images={images}
                saleDetails={saleDetails}
                onSort={onSort}
            />
        )
    }

    // return UI 
    return(
            <ProductFilter 
                onResultFilterRec={ResultFilterUI}
                titleRec={title}
                sizes={sizes}
                onHandleChangeSize={onHandleChangeSize}
                onHandleChangePrice={onHandleChangePrice}
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

// custom sort 
const sortNameUp = (a,b) => {
    if (a.product_name > b.product_name) return 1;
    if (a.product_name < b.product_name) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.product_name > b.product_name) return -1;
    if (a.product_name < b.product_name) return 1;
    return 0;
}
const sortPriceUp = (a,b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
}
const sortPriceDown = (a,b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
}

const onFilterPrice = (type,array) => {
    switch (type) {
        case '1':
            const result1 = array.filter(
                element => {
                    return element.price<100000;
                }
            )
            return result1;
        case '2':
            const result2 = array.filter(
                element => {
                    return element.price>=100000&&element.price<500000;
                }
            )
            return result2;
        case '3':
            const result3 = array.filter(
                element => {
                    return element.price>=500000&&element.price<1000000;
                }
            )
            return result3;
        case '4':
            const result4 = array.filter(
                element => {
                    return element.price>=1000000;
                }
            )
            return result4;
        default:
            return array;
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductFilterContainer)