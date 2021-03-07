// import library style, component
import './NotFound.scss';
import SmallBanner from '../fixcontents/smallbanner/SmallBanner';

// function code here
function NotFound() {
    return (
        <>
            <SmallBanner title='Lỗi tải trang'/>
            <div className='not-found'>
                <div className="wrapper">
                    <div className="not-found__contents">
                        <p>Không tìm thấy nội dung!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;