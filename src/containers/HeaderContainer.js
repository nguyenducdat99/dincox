// import style library, components
import {connect} from 'react-redux';
import Header from '../components/header/Header';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';

// code function here
function CartContainer(props){
    useEffect(
        () => {
            props.onFetchApiCategory();
            // eslint-disable-next-line
        },[]
    )

    // declare state
    var { cart } = props;
    var quantity = cart.length===0?0:cart.length;
    var listCategory = check => {
        switch (check) {
            case 0:
                return props.categories.map((item,index)=>{
                    return (
                        <li key={index}><a href='/#'>{item.category_name}</a></li>
                    )
                });
            case -1:
                return props.categories.map((item,index)=>{
                    if (index===0) return ''
                    if (index%2!==0) return (
                        <li key={index}><a href='/#'>{item.category_name}</a></li>
                    );
                    return '';
                });
                
            case 1:
                return props.categories.map((item,index)=>{
                    if (index===0) return ''
                    if (index%2===0) return (
                        <li key={index}><a href='/#'>{item.category_name}</a></li>
                    );
                    return '';
                });
            default:
                props.categories.map((item,index)=>{
                    return (
                        <li key={index}><a href='/#'>{item.category_name}</a></li>
                    )
                });
                
        }
    }

    return(
        <Header 
            quantityRec={quantity}
            listCategoryRec={listCategory}    
        />
    );
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        categories: state.listCategory
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onFetchApiCategory: () => {
            dispatch(Actions.fetchCategoriesRequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)