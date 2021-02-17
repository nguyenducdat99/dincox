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
        infinite: true,
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

                
                
            </div>
            
        </div>
    );
}
export default Product;