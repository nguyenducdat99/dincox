// import library style
import './SmallBanner.scss';
import { Link } from "react-router-dom";
import BackgroundImage from './background_image.png';

function SmallBanner(props){
    // focus to header
    window.scrollTo(0,0);

    return(
        <>  
            <div className="small-banner__image">
                <img src={BackgroundImage} alt=""/>
            </div>
            <div className="small-banner">
                <div className="small-banner__background-header"></div>

                <div className="wrapper">
                    <div className="small-banner-grid">
                        <h2>{props.title}</h2>
                        <div className="small-banner-grid__url">
                            <p title="Trở về trang chủ"><Link to="/">Trang chủ</Link> / {props.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SmallBanner;