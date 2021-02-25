// import style library, component
import './Register.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <>
            <SmallBanner title="Tài khoản" title2="Tạo tài khoản"/>
            <div className="register">
                <div className="wrapper">
                    <div className="register__grid">
                        <div className="register__title">
                            <h1>Tạo tài khoản</h1>
                        </div>
                        <form action="" methode="">
                            <div className="register__form-group">
                                <input type="text" className="register__form-group__form-control" required placeholder="Họ"/>
                            </div>
                            <div className="register__form-group">
                                <input type="text" className="register__form-group__form-control" required placeholder="Tên"/>
                            </div>
                            <div className="register__form-group">
                                <input type="email" className="register__form-group__form-control" required placeholder="Email"/>
                            </div>
                            <div className="register__form-group">
                                <input type="password" className="register__form-group__form-control" required placeholder="Mật khẩu" />
                            </div>
                            <div className="register__form-group">
                                <button type="submit" className="register__form-group__form-control register__form-group__form-control--button">Đăng ký</button>
                            </div>
                            <div className="register__form-group">
                                <Link to="/">Trở về</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;