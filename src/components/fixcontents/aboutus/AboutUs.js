// import libary style
import './AboutUs.scss';
import Logo from './logo.png';
import Signature from './signature.png';
import SmallBanner from '../smallbanner/SmallBanner';

// code function here
function AboutUs() {
    
    return(
        <>
            <SmallBanner title="Giới thiệu"/>    
            <div className="about-us">
                <div className="wrapper">
                    <h1>Giới thiệu</h1>
                    <div className="about-us__contents">
                        <p>Giày Dincox (Cox Shoes) là thương hiệu giày chính hãng Việt Nam với nhiều mẫu mã đa dạng từ kiểu giày sneaker, slip on đến giày hi – top. Chúng tôi đã không ngừng nổ lực để nâng cao chất lượng giày Việt đến cho mọi người. Với quy trình sản xuất rất chặt chẽ từ khâu quản lý chuyên nghiệp, thiết kế kiểu dáng và đội ngũ hơn 2000 công nhân có kinh nghiệm làm Giày lâu năm. Chúng tôi tự hào khi đem đến cho người tiêu dùng những đôi giày cực kỳ chắc chắn, mềm mại, kĩ lưỡng từng đường may theo từng mm và luôn đạt chuẩn Quốc tế.</p>
                        <p>Hàng năm đội ngũ công nhân viên của nhà máy đã sản xuất ra thị trường quốc tế, nhất là những thị trường khó tính như Anh, Mỹ, Úc hơn 2 triệu đôi.</p>
                        <p>Với tiêu chí: “ Giày chuẩn Âu – Giá Ưu Việt” Dincox muốn truyền tải những thông điệp về hình ảnh cũng như chất lượng tốt nhất trên từng đôi giày.</p>
                        <p>
                            <img src={Logo} alt="Logo"/>
                        </p>
                        <p>
                            <img src={Signature} alt="Signature"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;