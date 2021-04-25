// import style library, component
import { Link } from 'react-router-dom';
import './TotalItem.scss';
import * as ConvertState from '../../../commons/HandleState';

// code funciton here
function TotalItem(props) {
    // get props
    const { 
        listItem,
        saleDetails
    } = props;
    
    // caculator amount for cart
    const totalAmount = cart => {
        let result = 0;
        cart.forEach((item, index) => {
            let discount = 0;
            if (saleDetails.length>0)
                discount = ConvertState.findDiscountForProduct(item.product.id_product,saleDetails)[0].discount;
    
            const factor = item.product.is_sale?((100-discount)/100):1

            result += item.product.price*item.quantity*factor;

        });   
        
        return result;
    }

    return (
        <div className='total-item'>
            <div className='total-item__checkout'>
                <p>Tổng tiền: <b>{totalAmount(listItem)}<u>đ</u></b></p>
                <Link to='/checkouts'>
                    <button type='submit'>
                        Đặt hàng
                    </button>
                </Link>    

            </div>
        </div> 
    )
}
export default TotalItem;