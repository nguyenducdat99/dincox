// import style library, component
import './TotalItem.scss';

// code funciton here
function TotalItem() {
    // declare state
    
    return (
        <div className='total-item'>
            <div className='total-item__note'>
                <label>
                    <p>Chú thích cho cửa hàng</p>
                    <textarea rows={6}></textarea>
                </label>
            </div>
            <div className='total-item__checkout'>
                <p>Tổng tiền: <b>375000<u>đ</u></b></p>
                <button type='submit'>Thanh Toán</button>
            </div>
        </div> 
    )
}
export default TotalItem;