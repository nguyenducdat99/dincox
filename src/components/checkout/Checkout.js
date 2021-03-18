// import library style, component
import './Checkout.scss';
import Smallbanner from '../fixcontents/smallbanner/SmallBanner';
import ReceiveForm from './receiverform/ReceiverForm';
import Payment from './payment/Payment';
import { useState } from 'react';

// code function here
function Checkout(props) {
    // declare state
    const [toggleForm, setToggleForm] = useState(true);

    // close form receive
    var onCloseForm = () => {
        setToggleForm(false);
    }

    // close form payment
    var onOpenForm = () => {
        setToggleForm(true);
    }


    return (
        <>
            <Smallbanner title="Thanh toán" />

            <div className="check-out">
                <div className="wrapper">
                    <div className="check-out__grid">
                        <div className="check-out__info">
                            {
                                toggleForm?
                                <ReceiveForm 
                                    onCloseForm={onCloseForm}
                                />:
                                <Payment
                                    onCloseForm={onOpenForm}
                                />
                            }
                            
                        </div>
                        <div className="check-out__list-item">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="item">
                                                <div className="item__item-image">
                                                    <img alt='' src=''/>
                                                    <div className='item__quantity'>
                                                        1
                                                    </div>
                                                </div>
                                                <div className="item__item-info">
                                                    <p>D27 DENIM</p>
                                                    <p>size: 36</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p> 440000 đ</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className='check-out__list-item__address-receiver'>
                                <p>Nơi nhận: Hà nội</p>
                            </div>
                            <div className='check-out__list-item__caculator'>
                                <p>
                                    <span>Tạm tính:</span>
                                    <span>100000 đ</span>
                                </p>
                            </div>
                            <div className='check-out__list-item__caculator'>
                                <p>
                                    <span><b>Tổng tiền:</b></span>
                                    <span><b>10000 đ</b></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;