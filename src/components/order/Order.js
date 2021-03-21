// import lstyle library
import { useEffect, useState } from 'react';
import SmallBanner from '../fixcontents/smallbanner/SmallBanner';
import OrderDetail from './orderdetail/OrderDetail';
import './Order.scss';

// code function here
function Order(props){
    // get props
    const {fetchOrderDetailRec, orderDetailsRec, productsRec, 
        fetchOrderRec, ordersRec, sizesRec} = props;

    // declare state
    const [showDetail,setShowDetail] = useState(false);
    const [presentOrder,setPresentOrder] = useState(
        {
            id_order: 0,
            id_account: 0,
            create_at: "",
            email: "",
            number_phone: "0",
            receiver: "",
            sent_to: "",
            transport_fee: 0,
            status: 0
        }
        );
    const [numberPhone, setNumberPhone] = useState('');
            
    // open form detail
    var onOpenForm = order => {
        setPresentOrder(order);
        setShowDetail(true);
    }

    // get order detail
    useEffect(
        () => {
            if (presentOrder.id_order!==0) {
                fetchOrderDetailRec(presentOrder.id_order);
            }
            // eslint-disable-next-line
        },[presentOrder.id_order]
    )

    // close form detail
    var onCloseForm = () => {
        setPresentOrder(
            {
                id_order: 0,
                id_account: 0,
                create_at: "",
                email: "",
                number_phone: "0",
                receiver: "",
                sent_to: "",
                transport_fee: 0,
                status: 0
            }
        );
        setShowDetail(false);
    }
    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        if (numberPhone.trim()==='') return alert('Bạn vui lòng nhập số điện thoại để kiểm tra!')
        
        fetchOrderRec(numberPhone);
    }

    // handle when input change
    var onHandleChange = event => {
        let value = event.target.value;

        setNumberPhone(value);
    }

    // return list ui
    var listOrder = ordersRec.length===0?'':ordersRec.map(
        (element, index) => {
            return (
                <tr
                    className={index%2!==0?'highlight-row':''}
                    key={index}
                >
                    <td>{index+1}</td>
                    <td>{'dincox' + element.id_order}</td>
                    <td>{element.receiver} </td>
                    <td>{element.sent_to}</td>
                    <td>
                        <p>{element.number_phone}</p>
                        <p>{element.email}</p>
                    </td>
                    <td>
                        {element.create_at}
                    </td>
                    <td>
                    {
                        element.status?
                        <span className="waiting">Đặt hàng</span>:
                        <span className="successful">Giao thành công</span> 
                    }
                    </td>
                    <td>
                        <u 
                            onClick={
                                () => {
                                    onOpenForm(element);
                                }
                            }
                        >Chi tiết</u>
                    </td>
                </tr>
            )
        }
    )


    return(
        <>
            <SmallBanner title='Kiểm tra đơn hàng'/>
            {
                showDetail?
                <OrderDetail
                    onCloseFormRec={onCloseForm}  
                    presentOrderRec={presentOrder}
                    orderDetailsRec={orderDetailsRec}
                    productsRec={productsRec}
                    sizesRec={sizesRec}
                />:
                ''
            }
            <div className="order">
                <div className="wrapper">
                    <div className="order-grid">

                        <form action="" method="" onSubmit={onHandleSubmit}>
                            <div className="form-group">
                                <h2>Kiểm tra đơn hàng</h2>
                                <div className="form-group__input">
                                    <label>
                                        <p>Số điện thoại</p>
                                        <input type='text'
                                            className="form-control"
                                            value={numberPhone}
                                            onChange={onHandleChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <button type='submit'>Kiểm tra</button>
                        </form>

                        {
                            ordersRec.length===0?
                            '':
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã đơn hàng</th>
                                        <th>Người nhận</th>
                                        <th>Địa chỉ</th>
                                        <th>Liên lạc</th>
                                        <th>Ngày đặt</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {
                                     listOrder
                                 }   
                                </tbody>
                            </table>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;