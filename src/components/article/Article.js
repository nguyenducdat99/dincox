// import style library
import Slider from 'react-slick';
import './Article.scss';
import SingleArticle from './sallarticle/SmallArticle'

// code function here
function Article() {
    // declare data
    const listIndex = [1,2,3,4,5,6,7,8];

    // setting for slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return(
        <div className="article">
            <div className="wrapper">
                <h2>TIN TỨC NỔI BẬT</h2>
                <Slider {...settings}>
                    {
                        listIndex.map((item, index) =>
                            <SingleArticle key={index}/>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}
export default Article;