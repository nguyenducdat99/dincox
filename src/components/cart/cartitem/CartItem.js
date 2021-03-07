// import style library, component
import { useState } from 'react';
import './CartItem.scss';

// code funciton here
function CartItem() {
    // declare state
    const [quantity,setQuantity] = useState(0);

    return (
            <tr className="cart-item">
                <td>
                    <div className="cart-item__item-detail">
                        <div className="cart-item__item-detail__image">
                            <img src="" alt=""/>
                        </div>
                        <div className="cart-item__item-detail__content">
                            <h3>COX007 WHITE</h3>
                            <p>Size: 44</p>
                            <button type='button'>Xóa</button>
                        </div>
                    </div>
                </td>
                <td><b>100000<u>đ</u></b></td>
                <td>
                    <div className='cart-item__item-detail__action'>
                        <button type='button'
                            onClick={
                                () => {
                                    if (quantity===0) return;
                                    setQuantity(quantity-1);
                                }
                            }
                        >-</button>
                        <input type='text' value={quantity} readOnly/>
                        <button type='button'
                            onClick={
                                () => {
                                    setQuantity(quantity+1);
                                }
                            }
                        >+</button>
                    </div>
                </td>
                <td><b>100000<u>đ</u></b></td>
            </tr>
    )
}
export default CartItem;