// import style library, components
import {connect} from 'react-redux';
import Cart from '../components/cart/Cart';
import PropTypes from 'prop-types';
import CartItem from '../components/cart/cartitem/CartItem';

// code function here
function CartContainer(props){
    // declare state
    var { cart } = props;
    var listIndex = showCart();

    function showCart() {
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
                    />
        });
    }

    return(
        <Cart cart={listIndex} />
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
export default connect(mapStateToProps,null)(CartContainer)