// import style library, component
import { Link } from 'react-router-dom';
import './TotalItem.scss';

// code funciton here
function TotalItem(props) {
    // get props
    var { listItem } = props;
    
    function totalAmount(cart){
        let result = 0;
        cart.forEach((item, index) => {
            const discount = 25;
            const factor = ((100-discount)/100);
            if (item.product.is_sale) {
                result += item.product.price*item.quantity*factor;
            }else{
                result += item.product.price*item.quantity;
            } 
        });   
        
        return result;
    }

    return (
        <div className='total-item'>
            <div className='total-item__note'>
                <label>
                    <p>Chú thích cho cửa hàng</p>
                    <textarea rows={6}></textarea>
                </label>
            </div>
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