import './header.scss';
import logo from './logo-dincox.png';

function Header() {
    return(
        <div className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div className="header-grid__logo">
                        <h1>
                            <img src={logo} alt=""/>
                        </h1>
                    </div>
                    <nav className="header-grid__navigation">
                        <div className="header-grid__navigation__link">
                            <ul>
                                <li>
                                    <a>Sản phẩm &nbsp;
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>

                                    </a>
                                </li>
                                <li>
                                    <a>Nam &nbsp;
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>

                                    </a>
                                </li>
                                <li>
                                    <a>Nữ &nbsp;
                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li><a>Sale Off</a></li>
                                <li><a>Hệ thống cửa hàng</a></li>
                                <li><a>Kiểm tra đơn hàng</a></li>
                            </ul>
                        </div>
                        <div className="header-grid__navigation__search">
                            <a>Tìm kiếm</a>
                        </div>
                        <div className="header-grid__navigation__account">
                            <a>Tài khoản</a>
                        </div>
                        <div className="header-grid__navigation__cart">
                            <a>Giỏ hàng</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Header;