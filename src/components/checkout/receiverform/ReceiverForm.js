// import library style, component
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReceiverForm.scss';

// code function here
function ReceiverForm(props) {
    // get props
    const {toggleFormRec, onCloseForm, onAddInfoCheckoutRec, infoRec} = props;

    // declare state
    const [info, setInfo] = useState(
        {
            name: '',
            email: '',
            numberPhone: '',
            address: ''
        }
    )

    // load data
    useEffect(
        () => {
            setInfo(
                {
                    ...infoRec
                }
            )
        // eslint-disable-next-line
        },[]
    )

    
    // handle when change value of input in form
    var onHandleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        
        setInfo({
            ...info,
            [name]: value
        })
    }


    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        onAddInfoCheckoutRec(info)
    }



    return (
        <div className={toggleFormRec?'info-receiver':'info-receiver--none'}>
            <h2>Thông tin nhận hàng</h2>
            <form action='' method='' onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label>
                        <p>Tên liên hệ</p>
                        <input 
                            type="text"
                            value={info.name}
                            name='name'
                            className="form-control"    
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group custom-group">
                    <label>
                        <p>Email</p>
                        <input 
                            type="email"
                            value={info.email}
                            name='email'
                            className="form-control"   
                            onChange={onHandleChange} 
                        />
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input 
                            type="text"
                            value={info.numberPhone}
                            name='numberPhone'
                            className="form-control"
                            onChange={onHandleChange}
                            required    
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <p>Địa chỉ nhận hàng</p>
                        <input 
                            type="text"
                            value={info.address}
                            name='address'
                            className="form-control"    
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <u>
                        <Link to='/cart'>Giỏ hàng</Link>
                    </u>
                    <button type='submit' onClick={onCloseForm}>
                        Phương thức thanh toán
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReceiverForm;