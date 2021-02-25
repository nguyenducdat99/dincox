// import style library, component
import './Login.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// funciton code here
function Login(){
    return (
        <>
            <SmallBanner title="Tài Khoản"/>
            <div className="login">
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
                                <a>Trở về</a>
                                <a>Đăng ký</a>
                                <a>Quên mật khẩu?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;