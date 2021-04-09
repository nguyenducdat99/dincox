// import style library, component
import './Register.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Register(props){
    // get props
    const {
        onRegisterAccount,
        loginedAccount
    } = props;

    // get history
    let history = useHistory();

    // router when register successful
    useEffect(
        () => {
            if (loginedAccount.position===0&&loginedAccount.user_name==='') 
                history.replace('/account/login');
            
                // eslint-disable-next-line
        },[loginedAccount]
    )


    // declare state store value form
    const [valueForm, setValueForm] = useState({
        user_name: '',
        password: '',
        email: '',
        address: ''
    })

    const onHandleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        setValueForm({
            ...valueForm,
            [name]: value
        })
    }


    const onHandleSubmit = event => {
        event.preventDefault();
        
        if (valueForm.user_name.indexOf(' ')!==-1) return alert("Tên đăng nhập không chứ khoảng trống!");

        let message = 'Tên đăng nhập: ' + valueForm.user_name;
            message += '\nEmail: ' + valueForm.email;
            message += '\nĐịa chỉ: ' + valueForm.address;
        const confirm = window.confirm(message+'\nBạn có muốn tạo tài khoản không?')

        if (confirm) {
            onRegisterAccount({
                ...valueForm,
                user_name: valueForm.user_name.toLowerCase(),
                email: valueForm.email.toLowerCase()
            });
            onClearForm();
        }
    }

    const onClearForm = () => {
        setValueForm(
            {
                ...valueForm,
                user_name: '',
                password: '',
                email: '',
                address: ''
            }
        )
    }

    return(
        <>
            <SmallBanner title="Tài khoản" title2="Tạo tài khoản"/>
            <div className="register">
                <div className="wrapper">
                    <div className="register__grid">
                        <div className="register__title">
                            <h1>Tạo tài khoản</h1>
                        </div>
                        <form action="" methode="" onSubmit={onHandleSubmit}>
                            <div className="register__form-group">
                                <input type="text" 
                                    className="register__form-group__form-control" 
                                    required 
                                    placeholder="Tên đăng nhập"
                                    name="user_name"
                                    value={valueForm.user_name}
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="register__form-group">
                                <input type="password" 
                                    className="register__form-group__form-control" 
                                    required 
                                    placeholder="Mật khẩu" 
                                    value={valueForm.password}
                                    name="password"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="register__form-group">
                                <input type="email" 
                                    className="register__form-group__form-control" 
                                    required 
                                    placeholder="Email"
                                    value={valueForm.email}
                                    name="email"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="register__form-group">
                                <input type="text" 
                                    className="register__form-group__form-control" 
                                    required 
                                    placeholder="Địa chỉ"
                                    value={valueForm.address}
                                    name='address'
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="register__form-group">
                                <button type="submit" className="register__form-group__form-control register__form-group__form-control--button">Đăng ký</button>
                            </div>
                            <div className="register__form-group">
                                <Link to="/account/login">Trở về</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;