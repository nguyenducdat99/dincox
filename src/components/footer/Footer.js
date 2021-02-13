// import style library
import { Link } from 'react-router-dom';
import './Footer.scss';

// code function here
function Footer() {
    return(
        <div className="footer">
            <div className="wrapper">
                <div className="footer-grid">
                    <div className="footer__contact">
                        <h3>VĂN PHÒNG TP. HỒ CHÍ MINH</h3>
                        <div className="footer__contact__address">
                            <p>Văn phòng công ty: 290 Tân Sơn Nhì, Phường Tân Sơn Nhì, Quận Tân Phú,Tp. Hồ Chí Minh</p>
                        </div>
                        <div className="footer__contact__tel">
                            <a href="tel: 0961 9888 40">
                                0961 9888 40
                            </a>
                        </div>
                        <div className="footer__contact__mail">
                            <a href="mailto: coxshoesvn@gmail.com">
                                coxshoesvn@gmail.com
                            </a>
                        </div>
                        <div className="footer__contact__certification">
                            <a href="javascript:void(0)">
                                <img src="http://theme.hstatic.net/1000365025/1000542873/14/ft_certi_img1.png" alt="Đã thông báo bộ công thương"/>
                            </a>
                            <a href="javascript:void(0)">
                                <img src="http://theme.hstatic.net/1000365025/1000542873/14/ft_certi_img2.png" alt="Đã đăng ký bộ công thương"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer__middle">
                        <div className="footer__middle__nav">
                            <h3>LIÊN KẾT NHANH</h3>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="">Tìm kiếm</a>
                                    </li>
                                
                                    <li>
                                        <Link to="/pages/about-us">Giới thiệu</Link>
                                    </li>
                                
                                    <li>
                                        <a href="">Chính sách bảo mật</a>
                                    </li>
                                
                                    <li>
                                        <a href="">Chính sách đổi trả</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__middle__open-time">
                            <h3>GIỜ MỞ CỬA VĂN PHÒNG</h3>
                            <p>
                                Từ 9:00 - 18:00 tất cả các ngày trong tuần (Trừ T7 và CN)
                            </p>
                        </div>
                    </div>
                    <div className="footer__subscribe">
                        <h3>ĐĂNG KÝ NHẬN TIN</h3>
                        <p>Mỗi tháng chúng tôi đều có những đợt giảm giá dịch vụ và sản phẩm nhằm tri ân khách hàng. 
                            Để có thể cập nhật kịp thời những đợt giảm giá này,  
                            vui lòng nhập địa chỉ email của bạn vào ô dưới đây.
                        </p>
                        <form action="" method="">
                            <input type="text" className="footer__subscribe__input" placeholder="Nhập địa chỉ email của bạn..."/>
                            <button type="button" className="footer__subscribe__button" >
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;