// import library style, component
import './Payment.scss';

// code function here
function Payment(props) {
    // get props
    const {onCloseForm, toggleFormRec} = props;

        // handle when submit
        var onHandleSubmit = event => {
            event.preventDefault();
        }
    
        

    return (
        <div className={toggleFormRec?"payment--none":'payment'}>
            <form action='' method='' onSubmit={onHandleSubmit}>
                <h2>Phương thức vận chuyển</h2>
                <div className="form-group first-child">
                    <label>
                        <input 
                            type="radio"
                            checked={true}
                            readOnly
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
                            readOnly
                        />&nbsp;
                        Thanh toán tại nhà
                    </label>
                </div>

                <div className="form-group">
                    <u>
                        <span onClick={onCloseForm}>Thông tin nhận hàng</span>
                    </u>
                    <button type='button'>
                        Thanh toán
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Payment;