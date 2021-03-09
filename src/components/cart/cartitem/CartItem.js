// import style library, component
import { useEffect, useState } from 'react';
import './CartItem.scss';

// code funciton here
function CartItem(props) {
    // declare state
    const [quantity,setQuantity] = useState(0);
    var { item } = props;

    // load quantity
    useEffect(
        () => {
            // setQuantity(40);
            setQuantity(item.quantity);
            // eslint-disable-next-line
        },[item.quantity]
    )
    
    var onDelItemInCartSend = () => {
        props.onDelItemInCartRec(item);
    }

    var onUpdateQuantitySend = (updateItem, quantity) => {
        if (quantity===0) {
            props.onDelItemInCartRec(updateItem);
            return;
        }
        props.onUpdateQuantityRec(updateItem, quantity);
    }

    return (
            <tr className="cart-item">
                <td>
                    <div className="cart-item__item-detail">
                        <div className="cart-item__item-detail__image">
                            <img src="" alt=""/>
                        </div>
                        <div className="cart-item__item-detail__content">
                            <h3>{item.product.product_name}</h3>
                            <p>Size: {item.size}</p>
                            <button type='button'
                                onClick={onDelItemInCartSend}
                            >Xóa</button>
                        </div>
                    </div>
                </td>
                <td><b>{item.product.price}<u>đ</u></b></td>
                <td>
                    <div className='cart-item__item-detail__action'>
                        <button type='button'
                            onClick={
                                () => {
                                    if (quantity===0) return;
                                    onUpdateQuantitySend(item,quantity-1);
                                }
                            }
                        >
                            <span className='fa fa-minus'></span>
                        </button>
                        <input type='text' value={quantity} readOnly/>
                        <button type='button'
                            onClick={
                                () => {
                                    onUpdateQuantitySend(item,quantity+1);
                                }
                            }
                        >
                            <span className='fa fa-plus'></span>
                        </button>
                    </div>
                </td>
                <td><b>{item.product.price*quantity}<u>đ</u></b></td>
            </tr>
    )
}
export default CartItem;