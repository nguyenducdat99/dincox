// import style library
import Slider from 'react-slick';
import './Article.scss';

// code function here
function Article(props) {

    // setting for slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: false
    };

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