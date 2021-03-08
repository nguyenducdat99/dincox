// import library style, component
import './Cart.scss';
import SmallBanner from '../fixcontents/smallbanner/SmallBanner';

// code function here
function Cart(props) {
    // get props
    var { item, totalItem } = props;


    return (
        <>
            <SmallBanner title='Giỏ hàng của tôi'/>
            <div className='cart'>
                <div className="wrapper">
                    <div className="cart__head">
                        <h2>Giỏ hàng</h2>
                    </div>
                    <div className="cart__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item}
                            </tbody>
                        </table>
                        <div className='cart__body__total-item'>
                            {totalItem}
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Cart;