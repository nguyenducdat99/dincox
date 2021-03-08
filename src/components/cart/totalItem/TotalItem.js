// import style library, component
import './TotalItem.scss';

// code funciton here
function TotalItem(props) {
    // get props
    var { listItem } = props;
    
    function totalAmount(cart){
        let result = 0;
        cart.forEach((item, index) => {
            result += item.product.price*item.quantity;
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
                <button type='submit'>Thanh Toán</button>
            </div>
        </div> 
    )
}
export default TotalItem;