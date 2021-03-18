// import library style, component
import './Checkout.scss';
import Smallbanner from '../fixcontents/smallbanner/SmallBanner';
import ReceiveForm from './receiverform/ReceiverForm';
import Payment from './payment/Payment';
import { useState } from 'react';

// code function here
function Checkout(props) {
    // get props
    const { onAddInfoCheckoutRec, infoRec, listItemRec, totalRec } = props;

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
                                
                                <>
                                    <ReceiveForm 
                                        toggleFormRec={toggleForm}
                                        onCloseForm={onCloseForm}
                                        onAddInfoCheckoutRec={onAddInfoCheckoutRec}
                                        infoRec={infoRec}
                                    />
                                    <Payment
                                        toggleFormRec={toggleForm}
                                        onCloseForm={onOpenForm}
                                    />
                                </>
                            }
                            
                        </div>
                        <div className="check-out__list-item">
                            <table>
                                <tbody>
                                {
                                    listItemRec
                                }
                                </tbody>
                            </table>
                            
                            {
                                infoRec.name.trim()===''?'':
                                <div className='check-out__list-item__address-receiver'>
                                    <p>Thông tin khách hàng:&nbsp; 
                                    {
                                        infoRec.name + ', ' + infoRec.numberPhone + ', ' + 
                                        infoRec.address
                                    }.
                                    </p>
                                </div>
                            }
                            <div className='check-out__list-item__caculator'>
                                <p>
                                    <span>Tạm tính:</span>
                                    <span>{totalRec} đ</span>
                                </p>
                            </div>
                            <div className='check-out__list-item__caculator'>
                                <p>
                                    <span>Phí ship:</span>
                                    <span>33.000 đ</span>
                                </p>
                            </div>
                            <div className='check-out__list-item__caculator'>
                                <p>
                                    <span><b>Tổng tiền:</b></span>
                                    <span><b>{totalRec*1 + 33000} đ</b></span>
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