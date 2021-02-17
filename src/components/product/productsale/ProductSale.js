// import style library, components
import './ProductSale.scss';
import SmallImg from './product__banner__small.jpg';
import LargeImg from './product__banner__large.jpg';
import { useState } from 'react';
import SingleProduct from '../aproduct/Aproduct';

// code function here
function ProductSale(){
    // declare state
    const [amountProduct,setAmountProduct] = useState(4);


    // load product list
    var listIndex=[];
    for(let i=0;i<amountProduct;i++) listIndex.push(i);
    // excute when user click button see more
    var onSeeMore = () => {
        setAmountProduct(amountProduct+4);
    }


    return(
        <>
            <div className="product__sales">
                <h2>SẢN PHẨM KHUYẾN MÃI</h2>
                <div className="product__sales__list">
                    {
                        listIndex.map((index,item)=> <SingleProduct key={index} />)
                    }
                </div>
                <div className="product__sales__expand">
                    <button type="button" onClick={onSeeMore}>Xêm thêm</button>
                </div>
            </div>
            {/* end product sales */}
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
            {/* end product banner */}
        </>
    );
}
export default ProductSale;