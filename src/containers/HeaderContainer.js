// import style library, components
import {connect} from 'react-redux';
import Header from '../components/header/Header';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// code function here
function CartContainer(props){
    useEffect(
        () => {
            props.onFetchApiCategory();
            // eslint-disable-next-line
        },[]
    )

    // get props
    var { cart,liveAccount,onLogoutAccount } = props;

    // get quantity item in cart
    var quantity = cart.length===0?0:cart.length;
    var listCategory = check => {
        switch (check) {
            case 0:
                return props.categories.map((item,index)=>{
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

    // clear info live account
    var clearAccount = () => {
        onLogoutAccount({
            user_name: '',
            position: -1,
            message: 'Đăng Xuất thành công'
        })
    }

    return(
        <Header 
            quantityRec={quantity}
            listCategoryRec={listCategory} 
            liveAccountRec={liveAccount}  
            clearAccountRec={clearAccount} 
        />
    );
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
        onLogoutAccount: info => {
            dispatch(Actions.loginAccount(info));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)