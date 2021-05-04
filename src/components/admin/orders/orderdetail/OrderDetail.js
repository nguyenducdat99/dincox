// import lstyle library
import './OrderDetail.scss';
import { mapValueAndName } from '../../../../constants/GlobalVariables';

// code function here
function OrderDetail(props){
    // get props
    const {
        closeDetail, 
        presentOrderRec, 
        orderDetailsRec, 
        productsRec, 
        sizesRec
    } = props;

    var valueOrder = 0;
    

    // return list ui
    const listItem = orderDetailsRec.length===0?
    <tr></tr>:
    orderDetailsRec.map(
        (element,index) => {
            let product_name = findProductName(productsRec,element.id_product);
            let price =  findProductPrice(productsRec,element.id_product);
            let discount = price*element.discount/100;
            let size_name = findSizeName(sizesRec,element.size);

            valueOrder = valueOrder + (price-discount)*element.quantity;

            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product_name}</td>
                    <td>{size_name}</td>
                    <td>{price} đ</td>
                    <td>{discount} đ</td>
                    <td>{element.quantity}</td>
                    <td>{(price-discount)*element.quantity} đ</td>
                </tr>
            )
        }
    )

    // find status order
    const statusOrder = (status) => {
        switch (status*1) {
            case -1:
                return mapValueAndName[4].name
            case 0:
                return mapValueAndName[0].name
            case 1:
                return mapValueAndName[1].name
            case 2:
                return mapValueAndName[2].name
            case 3:
                return mapValueAndName[3].name
            default:
                return '';
        }
    }

    // return ui
    return (
       <div className="order-detail__wrapper">
           <div className="order-detail">
               <div className="order-detail__close" onClick={closeDetail}>
                    <u><i className="fa fa-angle-left" aria-hidden="true"></i><span> Thoát</span></u>
               </div>
                <h3>
                    Đơn hàng Dincox{presentOrderRec.id_order} - 
                    Ngày đặt hàng:  {presentOrderRec.create_at} -  
                    {
                        ' ' + statusOrder(presentOrderRec.status)
                    }
                    </h3>
                <div className="order-detail__head">
                    <div className="order-detail__head__content">
                        <h4>Địa chỉ người nhận:</h4>
                        <p>{presentOrderRec.receiver}</p>
                        <p>Địa chỉ: {presentOrderRec.sent_to}</p>
                        <p>Điện thoại: {presentOrderRec.number_phone}</p>
                    </div>
                    <div className="order-detail__head__content">
                        <h4>Hình thức giao hàng:</h4>
                        <p>Giao hàng tận nhà</p>
                        <p>Phí vận chuyển: {presentOrderRec.transport_fee?presentOrderRec.transport_fee:0} đ</p>
                    </div>
                    <div className="order-detail__head__content">
                        <h4>Hình thức thanh toán:</h4>
                        <p>Thanh toán khi nhận hàng</p>
                    </div>
                </div>

                <div className="order-detail__body">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Sản phẩm</th>
                                <th>Kích cỡ</th>
                                <th>Giá bán</th>
                                <th>Giảm giá</th>   
                                <th>Số lượng</th>           
                                <th>Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                        </tbody>
                    </table>
                </div>

                <div className='order-detail__footer'>
                    <p>
                        <span>Tạm tính:</span>
                        <span>{valueOrder} đ</span>
                    </p>
                    <p>
                        <span>Phí vận chuyển:</span>
                        <span>{presentOrderRec.transport_fee} đ</span>
                    </p>
                    <p>
                        <span>Tổng cộng:</span>
                        <span>{valueOrder*1+presentOrderRec.transport_fee*1} đ</span>
                    </p>
                </div>
           </div>
       </div>
   )
}

function findProductName(items, id) {
    let result = '';
    
    items.forEach(element => {
        if (element.id_product*1===id*1) result = element.product_name;
    });

    return result;
}

function findProductPrice(items, id) {
    let result = '';
    
    items.forEach(element => {
        if (element.id_product*1===id*1) result = element.price;
    });

    return result;
}

function findSizeName(items, id) {
    let result = '';
    
    items.forEach(element => {
        if (element.id_size*1===id*1) result = element.size_name;
    });

    return result;
}

export default OrderDetail;