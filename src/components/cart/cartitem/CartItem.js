// import style library, component
import { useEffect, useState } from 'react';
import './CartItem.scss';
import * as constants from '../../../constants/Config';


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

function findImages(items,id) {
    let result = [];

    items.sort(function(a, b){return b.id_image - a.id_image})

    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    return result;
}

// code funciton here
function CartItem(props) {
    // declare state
    const [quantity,setQuantity] = useState(0);

    // / get props
    var { item, sizesRec, sizeDetailsRec, imagesRec } = props;

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

    
    // get images for item
    var path = findImages(imagesRec,item.product.id_product);
    
    // conver path
    path = '' + constants.API_URL + path[0];

    // get discount
    const discount = 25;

    // get factor
    const factor = item.product.is_sale?((100-discount)/100):1
   
    return (
            <tr className="cart-item">
                <td>
                    <div className="cart-item__item-detail">
                        <div className="cart-item__item-detail__image">
                            <img src={path} alt="dincox cart item"/>
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
                <td><b>{item.product.price*factor}<u>đ</u></b></td>
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
                <td><b>{item.product.price*quantity*factor}<u>đ</u></b></td>
            </tr>
    )
}
export default CartItem;