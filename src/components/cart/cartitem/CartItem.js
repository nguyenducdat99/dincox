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
            setQuantity(item.quantity);
            // eslint-disable-next-line
        },[]
    )

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
                            <button type='button'>Xóa</button>
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
                                    setQuantity(quantity-1);
                                }
                            }
                        >
                            <span className='fa fa-minus'></span>
                        </button>
                        <input type='text' value={quantity} readOnly/>
                        <button type='button'
                            onClick={
                                () => {
                                    setQuantity(quantity+1);
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