// import library style, component
import './Payment.scss';

function findQuantity(arr, id_product, id_size) {
    var result= -1;
    arr.forEach((item, index) => {

        if (item.id_size*1 === id_size*1&&item.id_product*1===id_product*1) {
            result = item.quantity; 
        };
    });
    return result;
}

// code function here
function Payment(props) {
    // get props
    const {onCloseForm, toggleFormRec, transportFeeRec, 
        cartRec, infoRec, onAddCheckoutRec, sizeDetailsRec } = props;


    var newSizeDetail = [];
    cartRec.forEach(element => {
        let currentQuantity = findQuantity(sizeDetailsRec, element.product.id_product, element.size); 

        newSizeDetail.push({
            id_product: element.product.id_product,
            id_size: element.size,
            quantity: (currentQuantity - element.quantity),
            status: 1
        })
    }); 

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        onAddCheckoutRec(
            {
                info: infoRec,
                cart: cartRec,
                transportFee: transportFeeRec
            }, newSizeDetail
        )
    }
    
    //         // get quantity of size currently
    // var quantityCurrent = findQuantity(sizeDetailsRec,itemEditRec.id_product,objectTask.id_size);

    // // updat quantity of size current
    // quantityCurrent = quantityCurrent===-1?0:quantityCurrent;

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
                    <p>{transportFeeRec}đ</p>
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
                    <button type='submit'>
                        Thanh toán
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Payment;