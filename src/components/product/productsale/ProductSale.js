// import style library, components
import './ProductSale.scss';
import { useState } from 'react';
import * as Actions from '../../../constants/Config';

function makeRandomIndex(max) {
    return Math.floor((Math.random() * max))
}

function makeRandomPath(items) {
    let result = '';

    
    if (items.length === 0) {
        return result;
    }else{
        result = result + Actions.API_URL + (items[makeRandomIndex(items.length)].path);
    }

    return result;
}

// code function here
function ProductSale(props){
    // declare state
    const [amountProduct,setAmountProduct] = useState(4);// amount product show

    // get props 
    const {imagesRec} = props;

    // filet props
    var imagesFillter = imagesRec.filter(
        element => {
            return element.id_new === null;
        }
    )

    // load product list
    var sum=0;// amount product show (condition)
    var {listProduct} = props;
    var listIndex= listProduct.map((item,index)=>{
        if (sum<amountProduct) {
            sum ++;
            return item;
        }
        return '';
    });
    // for(let i=0;i<amountProduct;i++) listIndex.push(i);
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
                        listIndex
                    }
                </div>
                <div className="product__sales__expand">
                    <button type="button" onClick={onSeeMore}>Xem thêm</button>
                </div>
            </div>
            {/* end product sales */}
            <div className="product__banner">
                    <div className="product__banner--small">
                        <img 
                            src={makeRandomPath(imagesFillter)} 
                            alt="dincox collection" 
                        />
                    </div>
                    <div className="product__banner--large">
                        <img 
                            src={makeRandomPath(imagesFillter)} 
                            alt="dincox collection" 
                        />
                    </div>
                    <div className="product__banner--small">
                        <img 
                            src={makeRandomPath(imagesFillter)} 
                            alt="dincox collection" 
                        />
                    </div>
                </div>
            {/* end product banner */}
        </>
    );
}

export default ProductSale;