// import lstyle library
import './OrderDetail.scss';

// code function here
function OrderDetail(props){
   return (
       <div className="order-detail__wrapper">
           <div className="order-detail">
                <h3>Đơn hàng dincox1 - Ngày đặt hàng: 20/20/2021 - Đã xác nhận</h3>
                <div className="order-detail__head">
                    <div className="order-detail__head__content">
                        <h4>Địa chỉ người nhận:</h4>
                        <p>Nguyễn Đức Đạt</p>
                        <p>Địa chỉ: Hà nội</p>
                    </div>
                    <div className="order-detail__head__content">
                        <h4>Hình thức giao hàng:</h4>
                        <p>Giao hàng tận nhà</p>
                        <p>Phí vận chuyển: 33000</p>
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
                                <th>Sản phẩm</th>
                                <th>Kích cỡ</th>
                                <th>Giá bán</th>
                                <th>Giảm giá</th>
                                <th>Tạm tính</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className='order-detail__footer'>
                    <p>
                        <span>Tạm tính:</span>
                        <span>100000</span>
                    </p>
                    <p>
                        <span>Phí vận chuyển:</span>
                        <span>100000</span>
                    </p>
                    <p>
                        <span>Tổng cộng:</span>
                        <span>100000</span>
                    </p>
                </div>
           </div>
       </div>
   )
}

export default OrderDetail;