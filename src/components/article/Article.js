// import style library
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Article.scss';

function onSettingSlide(slide) {
    let result = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slide,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: false
    };

    return {...result}
}

// code function here
function Article(props) {
    //declare state
    const [presentWidth, setPresentWidth] = useState(window.innerWidth);// store present browser width

    // get present width;
    useEffect(
        () => {
            window.addEventListener('resize', 
                () => {
                    setPresentWidth(window.innerWidth);
                }
            )
        },[]
    )

    // setting for slider
    var settings = {};
    if (presentWidth > 768) settings = {...onSettingSlide(3)};
    if (presentWidth > 480 && presentWidth < 769) settings = {...onSettingSlide(2)};
    if (presentWidth < 481) settings = {...onSettingSlide(1)};
    
    // get props
    const { listArticle } = props;

    return(
        <div className="article">
            <div className="wrapper">
                <h2>TIN TỨC NỔI BẬT</h2>
                <Slider {...settings}>
                    {
                        listArticle
                    }
                </Slider>
            </div>
        </div>
    );
}


export default Article;