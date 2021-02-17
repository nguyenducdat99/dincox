// import style library
import './Slider.scss';
import Sliders from 'react-slick';
import Img1 from './slide1.jpg';
import Img2 from './slide2.jpg';
import Img3 from './slide3.jpg';

// code function here
function Slider(){
    // setting for slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return(
        <div className="slider">
            <Sliders {...settings}>
                <div className="slider__slide">
                    <img src={Img1} alt=""/>
                    <div className="wrapper">
                        <div className="slider__slide__contents">
                            <div className="slider__slide__contents__title">
                                <p>Tự hào thương hiệu việt nam</p>
                            </div>
                            <div className="slider__slide__contents__button">
                                <a href="">Shopping now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__slide">
                    <img src={Img2} alt=""/>
                    <div className="wrapper">
                        <div className="slider__slide__contents">
                            <div className="slider__slide__contents__small-title">
                                <p>Bộ sưu tập 2021</p>
                            </div>
                            <div className="slider__slide__contents__title">
                                <p>Basic<br/>Style</p>
                            </div>
                            <div className="slider__slide__contents__button">
                                <a href="">More</a>
                                <a href="" className="slider__slide__contents__button--last-child">Shopping Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider__slide">
                    <img src={Img3} alt=""/>
                    <div className="wrapper">
                        <div className="slider__slide__contents">
                            <div className="slider__slide__contents__small-title">
                                <p>Mẫu giày cực chất</p>
                            </div>
                                <div className="slider__slide__contents__title">
                                    <p>Black & white</p>
                                </div>
                                <div className="slider__slide__contents__button">
                                    <a href="">More</a>
                                    <a href="" className="slider__slide__contents__button--last-child">Shopping Now</a>
                                </div>
                        </div>
                    </div>
                </div>
            </Sliders>
        </div>
    )
}
export default Slider;