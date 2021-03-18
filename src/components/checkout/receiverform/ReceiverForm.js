// import library style, component
import './ReceiverForm.scss';

// code function here
function ReceiverForm(props) {
    // get props



    return (
        <div className="info-receiver">
            <h2>Thông tin nhận hàng</h2>
            <form action='' method=''>
                <div className="form-group">
                    <label>
                        <p>Tên liên hệ</p>
                        <input 
                            type="text"
                            className="form-control"    
                        />
                    </label>
                </div>
                <div className="form-group custom-group">
                    <label>
                        <p>Email</p>
                        <input 
                            type="text"
                            className="form-control"    
                        />
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input 
                            type="text"
                            className="form-control"    
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <p>Địa chỉ nhận hàng</p>
                        <input 
                            type="text"
                            className="form-control"    
                        />
                    </label>
                </div>
                <div className="form-group">
                    <u>
                        <a href='/#'>Giỏ hàng</a>
                    </u>
                    <button type='submit'>
                        Phương thức thanh toán
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReceiverForm;