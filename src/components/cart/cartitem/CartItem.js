// import style library, component
import { useEffect, useState } from 'react';
import './CartItem.scss';

function findSizeName(items, id_size) {
    let result = "";
    items.forEach(element => {
        if (element.id_size===id_size) result = element.size_name
    });

    return result;
}
function findQuantity(items, id_product, id_size) {
    let result = 0;
    items.forEach(element => {
        if (element.id_product===id_product&&element.id_size===id_size) {
            result = element.quantity;
        }  
    });

    return result;
}
// code funciton here
function CartItem(props) {
    // declare state
    const [quantity,setQuantity] = useState(0);
    var { item,sizesRec,sizeDetailsRec } = props;

    // load quantity
    useEffect(
        () => {
            setQuantity(item.quantity);
            // eslint-disable-next-line
        },[item.quantity]
    )
    
    // get size name from id_size 
    var sizeName = findSizeName(sizesRec,item.size);

    // get max quantity
    var quantityMax = findQuantity(sizeDetailsRec,item.product.id_product, item.size);
 
    // handle when click delete item in cart
    var onDelItemInCartSend = (item,size) => {
        props.onDelItemInCartRec(item,size);
    }


    // handle when change quantity of item in cart
    var onUpdateQuantitySend = (updateItem,size ,quantity) => {
        if (quantity===0) {
            props.onDelItemInCartRec(updateItem,size);
        }else{
            props.onUpdateQuantityRec(updateItem, size,quantity);
        }
    }

    // limit quantity can select
    if (quantity>quantityMax) {
        onUpdateQuantitySend(item,item.size,quantityMax);
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
                            <p>Size: {sizeName}</p>
                            <button type='button'
                                onClick={() =>{
                                    onDelItemInCartSend(item,item.size)
                                }}
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
                                    onUpdateQuantitySend(item,item.size,quantity-1);
                                }
                            }
                        >
                            <span className='fa fa-minus'></span>
                        </button>
                        <input type='text' value={quantity} readOnly/>
                        <button type='button'
                            onClick={
                                () => {
                                    onUpdateQuantitySend(item,item.size,quantity+1);
                                }
                            }
                            disabled={quantity<quantityMax?false:true}
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