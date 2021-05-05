// import style library, components
import {connect} from 'react-redux';
import Header from '../components/header/Header';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// code function here
function HeaderContainer(props){

    // get props
    const { 
        cart,
        liveAccount,
        onLogoutAccount,
        onFetchSize,
        onFetchImage,
        onFetchSizeDetail,
        onFetchProduct,
        onFetchApiCategory,
        onFetchSaleDetail
    } = props;

    useEffect(
        () => {
            onFetchApiCategory();
            onFetchProduct();
            onFetchSizeDetail();
            onFetchImage();
            onFetchSize();
            onFetchSaleDetail()
            // eslint-disable-next-line
        },[]
    )

    // get quantity item in cart
    var quantity = cart.length===0?0:cart.length;
    const listCategory = (check, callback) => {
        switch (check) {
            case 0:
                return props.categories.map((item,index)=>{
                    if (callback) {
                        return (
                            <li key={index}>
                                <Link 
                                    to={'/collections/'+item.id_category}
                                    onClick={()=> callback()}
                                >
                                    {item.category_name}
                                </Link>
                            </li>
                        )
                    }
                    return (
                        <li key={index}>
                            <Link to={'/collections/'+item.id_category}>
                                {item.category_name}
                            </Link>
                        </li>
                    )
                });
            case -1:
                return props.categories.map((item,index)=>{
                    if (index===0) return ''
                    if (index%2!==0) return (
                        <li key={index}>
                            <Link to={'/collections/'+item.id_category}>
                                {item.category_name}
                            </Link>
                        </li>
                    );
                    return '';
                });
                
            case 1:
                return props.categories.map((item,index)=>{
                    if (index===0) return ''
                    if (index%2===0) return (
                        <li key={index}>
                            <Link to={'/collections/'+item.id_category}>
                                {item.category_name}
                            </Link>
                        </li>
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
            liveAccountRec={liveAccount}  
            onLogoutAccount={onLogoutAccount}
        />
    );
}

HeaderContainer.propTypes = {
    cart: PropTypes.array,
    categories: PropTypes.array,
    liveAccount: PropTypes.object,
    onLogoutAccount: PropTypes.func,
    onFetchSaleDetail: PropTypes.func,
    onFetchApiCategory: PropTypes.func,
    onFetchProduct: PropTypes.func,
    onFetchSizeDetail: PropTypes.func,
    onFetchImage: PropTypes.func,
    onFetchSize: PropTypes.func
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        categories: state.listCategory,
        liveAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
        onFetchApiCategory: () => {
            dispatch(Actions.fetchCategoriesRequest());
        },
        onLogoutAccount: () => {
            dispatch(Actions.logoutAccount());
        },
        onFetchSize: () => {
            dispatch(Actions.fetchSizesRequest());
        },
        onFetchImage: () => {
            dispatch(Actions.fetchImageRequest());
        },
        onFetchProduct: () => {
            dispatch(Actions.fetchProductRequest());
        },
        onFetchSizeDetail: () => {
            dispatch(Actions.fetchSizeDetailsRequest());
        },
        onFetchSaleDetail: () => {
            dispatch(Actions.fetchSaleDetailRequest());
        }
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)