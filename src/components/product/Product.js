// import style library
import './Product.scss';
import Slider from 'react-slick';
import SingleProduct from './aproduct/Aproduct';
import SmallImg from '../../img/product__banner__small.jpg';
import LargeImg from '../../img/product__banner__large.jpg';
import { useState } from 'react';

function Product() {
    // declare state
    const listIndex = [0,1,2,3,4,5,6,7,8];
    const [isHightlight,setIsHightLight] = useState(true);

    // excute when click butotn;
    function removeStyle() {
        let data=document.getElementsByName('action');
        for(let i=0;i<data.length;i++){
            data[i].style.backgroundColor = 'lightgray';
            data[i].style.color = 'black';
        }
    }
    var onHightLight = (event) =>{
        removeStyle();
        event.target.style.backgroundColor = "gray";
        event.target.style.color = "white";
    }

    // setting for slider
    const settings = {
        dots: false,
        infinite: 300,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
      };
    return(
        <div className="product">
            <div className="wrapper">
                <div className="product__sales">
                    <h2>SẢN PHẨM KHUYẾN MÃI</h2>
                    <Slider {...settings}>
                        {
                            listIndex.map((item, index) =>
                                <SingleProduct key={index}/>
                            )
                        }
                    </Slider>
                </div>
                <div className="product__banner">
                    <div className="product__banner--small">
                        <img src={SmallImg} alt="" />
                    </div>
                    <div className="product__banner--large">
                        <img src={LargeImg} alt="" />
                    </div>
                    <div className="product__banner--small">
                        <img src={SmallImg} alt="" />
                    </div>
                </div>
                <div className="product__hightlights">
                    <h2>SẢN PHẨM NỔI BẬT</h2>
                    <div className="product__hightlights__action">
                        <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                        <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                        <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>
                    </div>
                    <div className="product__hightlights__list-product">
                        {
                            listIndex.map((item,index)=>
                                <SingleProduct key={index}/>
                            )
                        }
                    </div>
                    
                </div>
                <div className="product__collection">
                    <h2>SẢN PHẨM NỔI BẬT</h2>
                    <div className="product__collection-grid">
                        <div className="product__collection__list-small">
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                            <div className="product__collection__list-small__single">
                                a
                            </div>
                        </div>
                        <div className="product__collection__big">
                            b
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;