// import style library
import Slider from 'react-slick';
import './Article.scss';
import SingleArticle from './smallarticle/SmallArticle'
import {connect} from 'react-redux';

// code function here
function Article(props) {
    // load data
    var { listNew } = props;
    var listIndex = listNew.map((item, index)=>{
        if(item.is_active){
            return (
                <SingleArticle key={index} data={item}/>
            )
        }
        return '';
    })

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

    return(
        <div className="article">
            <div className="wrapper">
                <h2>TIN TỨC NỔI BẬT</h2>
                <Slider {...settings}>
                    {
                        listIndex
                    }
                </Slider>
            </div>
        </div>
    );
}

const mapStateToPropsArticle=(state)=>{
    return {
        listNew: state.ListNew
    }
}

export default connect(mapStateToPropsArticle,null)(Article);