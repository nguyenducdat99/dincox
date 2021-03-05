// import style library, component
import './Recover.scss'

// code function here
function Recover(props) {

    // event process
    var toggle = () => {
        props.toggle();
    }
    return(
        <div className="recover">
            <div className="wrapper">
                <div className="recover__grid">
                    <div className="recover__title">
                        <h1>Cài đặt lại mật khẩu</h1>
                        <p>Mật khẩu sẽ được gửi về hộp thư của bạn</p>
                    </div>
                    <form action="" method="">
                        <div className="recover__form-group">
                            <input type="email" className="recover__form-group__form-control" placeholder="Email" required/>
                        </div>
                        <div className="recover__form-group">
                            <button type="submit" className="recover__form-group__form-control recover__form-group__form-control--button">
                                Gửi
                            </button>
                        </div>
                        <div className="recover__form-group">
                            <p onClick={toggle}>Bỏ qua</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Recover;