// import library style, component
import './Payment.scss';

// code function here
function Payment(props) {
    // get props



    return (
        <div className="payment">
            <form action='' method=''>
                <h2>Phương thức vận chuyển</h2>
                <div className="form-group first-child">
                    <label>
                        <input 
                            type="radio"
                            checked={true}
                        />&nbsp;
                        Giao hàng tại nhà
                    </label>
                    <p>33.000đ</p>
                </div>
                
                <h2>Phương thức thanh toán</h2>
                <div className="form-group">
                    <label>
                        <input 
                            type="radio"
                            checked={true}
                        />&nbsp;
                        Thanh toán tại nhà
                    </label>
                </div>

                <div className="form-group">
                    <u>
                        <a href='/#'>Thông tin nhận hàng</a>
                    </u>
                    <button type='submit'>
                        Thanh toán
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Payment;