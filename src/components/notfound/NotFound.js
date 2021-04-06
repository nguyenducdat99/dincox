// import library style, component
import './NotFound.scss';
import SmallBanner from '../fixcontents/smallbanner/SmallBanner';
import { Link } from 'react-router-dom';

// function code here
function NotFound() {
    return (
        <>
            <SmallBanner title='Lỗi tải trang'/>
            <div className='not-found'>
                <div className="wrapper">
                    <Link to='/'>
                        <span className="fa fa-angle-double-left" aria-hidden="true"></span>&nbsp;
                        <u>Trở về trang chủ</u>
                    </Link>
                    <div className="not-found__contents">
                        <p>Không tìm thấy nội dung!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;