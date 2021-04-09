// import style library, component
import './Login.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { Link, useHistory } from 'react-router-dom';
import Recover from '../recover/Recover';
import { useState } from 'react';
import { useEffect } from 'react';

// funciton code here
function Login(props){
    // get props
    const {
        loginedAccount
    } = props;

    // get History
    let history = useHistory();

    // declare state
    const [showRecover, setShowRecover] = useState(false);
    const [loginAccount, setLoginAccount] = useState(
        {
            user_name: '',
            password: ''
        }
    )
    // event process
    var onShowRecover = () => {
        setShowRecover(!showRecover);
    }

    useEffect(
        () => {
            const token = localStorage.getItem('token');
            const check = token&&token!==''?true:false;

            if (check) return history.replace('/');
            // eslint-disable-next-line
        },[loginedAccount]
    )

    // hanle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        props.onLoginAccountRec(loginAccount);
    }

    var onHandleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        setLoginAccount(
            {
                ...loginAccount,
                [name]: value
            }
        )
    }

    return (
        <>
            <SmallBanner title="Tài khoản" title2={showRecover?"Cài đặt lại mật khẩu":"Đăng nhập"}/>
            <div className={showRecover?"login--none":"login"}>
                <div className="wrapper">
                    <div className="login__grid">
                        <div className="login__title">
                            <h1>Đăng nhập</h1>
                        </div>
                        <form action="" method="" onSubmit={onHandleSubmit}>
                            <div className="login__form-group">
                                <input type="text" 
                                    className="login__form-group__form-control" 
                                    placeholder="Tài khoản" 
                                    name='user_name'
                                    value={loginAccount.user_name}
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="login__form-group">
                                <input type="password" 
                                    className="login__form-group__form-control"  
                                    placeholder="Mật khẩu" 
                                    name='password'
                                    value={loginAccount.password}
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="login__form-group">
                                <button type="submit" className="login__form-group__form-control login__form-group__form-control--button" >Đăng nhập</button>
                            </div>
                            <div className="login__form-group">
                                <Link to="/">Trở về</Link>
                                <Link to="/account/register">Đăng ký</Link>
                                <p onClick={onShowRecover}>Quên mật khẩu?</p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                showRecover?<Recover toggle={onShowRecover}/>:""
            }
        </>
    )
}
export default Login;