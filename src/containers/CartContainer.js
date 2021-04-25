// import style library, components
import {connect} from 'react-redux';
import Cart from '../components/cart/Cart';
import PropTypes from 'prop-types';
import CartItem from '../components/cart/cartitem/CartItem';
import TotalItem from '../components/cart/totalItem/TotalItem';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';

// code function here
function CartContainer(props){
    // get props
    const { 
        cart, 
        sizes, 
        sizeDetails, 
        images,
        onUpdateQuantity,
        onDelItemInCart,
        onFetchImage,
        saleDetails
    } = props;

    // LOAD DATA
    useEffect(
        () => {
            onFetchImage();
            // eslint-disable-next-line
        },[]
    )

    // return item in cart ui
    const showCart = cart => {
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
                        onDelItemInCartRec={onDelItemInCart}
                        onUpdateQuantityRec={onUpdateQuantity}
                        sizesRec={sizes}
                        sizeDetailsRec={sizeDetails}
                        imagesRec={images}
                        saleDetails={saleDetails}
                    />
        });
    }

    // return total item in cart
    const showTotalItem = cart => {
        if (cart.length === 0) return "";
        return <TotalItem 
                    listItem={cart}
                    saleDetails={saleDetails}
                />
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
                size: PropTypes.number,
                quantity: PropTypes.number
            }
        )
    ),
    sizes: PropTypes.array, 
    sizeDetails: PropTypes.array, 
    images: PropTypes.array,
    onUpdateQuantity: PropTypes.func,
    onDelItemInCart: PropTypes.func,
    onFetchImage: PropTypes.func,
    saleDetails: PropTypes.array 
}

const mapStateToProps = state => {
    return {
        cart: state.cart,        
        sizeDetails: state.listSizeDetail,
        sizes: state.listSize,
        images: state.listImages,
        saleDetails: state.saleDetails
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelItemInCart: (delItem,size) => {
            dispatch(Actions.delItenInCart(delItem,size));
        },
        onUpdateQuantity: (updateItem,size ,quantity) => {
            dispatch(Actions.updateQuantityItem(updateItem,size,quantity));
        },
        onFetchImage: () => {
            dispatch(Actions.fetchImageRequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)