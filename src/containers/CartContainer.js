// import style library, components
import {connect} from 'react-redux';
import Cart from '../components/cart/Cart';
import PropTypes from 'prop-types';
import CartItem from '../components/cart/cartitem/CartItem';
import TotalItem from '../components/cart/totalItem/TotalItem';
import * as Actions from '../actions/Actions';

// code function here
function CartContainer(props){
    // declare state
    var { cart } = props;

    var showCart = cart => {
        if (cart.length ===0) return (
            <tr>
                <td>Không có sản phẩm nào trong giỏ</td>
            </tr>
        );
        return cart.map((item, index) => {
            return <CartItem 
                        key={index} 
                        item={item}
                        index={index+1}
                        onDelItemInCartRec={props.onDelItemInCart}
                    />
        });
    }

    var showTotalItem = cart => {
        if (cart.length === 0) return "";
        return <TotalItem listItem={cart}/>
    }

    return(
        <Cart 
            item={showCart(cart)}
            totalItem={showTotalItem(cart)}    
        />
    );
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape(
            {
                product: PropTypes.object,
                size: PropTypes.string,
                quantity: PropTypes.number
            }
        )
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelItemInCart: delProduct => {
            dispatch(Actions.delItenInCart(delProduct));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)