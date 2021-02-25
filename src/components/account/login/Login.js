// import style library, component
import './Login.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { Link } from 'react-router-dom';
import Recover from '../recover/Recover';
import { useState } from 'react';

// funciton code here
function Login(){
    // declare state
    const [showRecover, setShowRecover] = useState(false);
    
    // event process
    var onShowRecover = () => {
        setShowRecover(!showRecover);
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
                        <form action="" method="">
                            <div className="login__form-group">
                                <input type="email" className="login__form-group__form-control" placeholder="Email" required/>
                            </div>
                            <div className="login__form-group">
                                <input type="password" className="login__form-group__form-control"  placeholder="Mật khẩu" required/>
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