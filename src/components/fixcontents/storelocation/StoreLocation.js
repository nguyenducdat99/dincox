// import style library, Image, component
import StoreMap from './storelocation.jpg';
import SmallBanner from '../smallbanner/SmallBanner';
import './StoreLocation.scss';

// code function here
function StoreLocation() {
    
    return(
        <>
            <SmallBanner title="Hệ thống cửa hàng"/>    
            <div className="store-location">
                <div className="wrapper">
                    <h1>Hệ thống cửa hàng</h1>
                    <div className="store-location__contents">
                        <p>
                            <img src={StoreMap} alt="store map"/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StoreLocation;