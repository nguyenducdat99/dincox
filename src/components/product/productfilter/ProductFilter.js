import {  useState } from "react"
// import style library, Component
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import './ProductFilter.scss';

// code function here
function ProductFilter(props){
    
    // get props
    const { 
        titleRec,
        onResultFilterRec,
        sizes,
        onHandleChangeSize,
        onHandleChangePrice
    } = props;

    // declare state component
    const [filterPrice, setFilterPrice] = useState(false);
    const [filterSize, setFilterSize] = useState(false);
    const [valFilterSize, setValFilterSize] = useState([]);
    // eslint-disable-next-line
    const [valFilterPrice, setValFilterPrice] = useState(null);
 


    // function use when use click
    const onShowFilterPrice = () => {
        setFilterPrice(!filterPrice);
    }
    const onShowFilterSize = () => {
        setFilterSize(!filterSize);
    }

    // handle when select price filter
    const onHandlePrice = event => {
        const value = event.target.value;

        onHandleChangePrice(value);
        setValFilterPrice(value);
    }

    // handle when select size filter
    const onhandleSize = event => {
        const value = event.target.value;
 
        let valFilterSizeCopy = [...valFilterSize];
        let index = valFilterSizeCopy.indexOf(value);
        
        if(index > -1) {
            valFilterSizeCopy = valFilterSizeCopy.filter(
                element => {
                    return element !== value;
                }
            ) 
        }else{
            valFilterSizeCopy.push(value);
        }

        onHandleChangeSize(valFilterSizeCopy);
        setValFilterSize(valFilterSizeCopy);
    }



    // return option select
    const SizesFilterUI = sizes.map((element, index) => {

        return (
            <li key={index}>
                <label >
                    <input 
                        type="checkbox" 
                        value={element.id_size} 
                        onChange={onhandleSize}
                    />
                    <span>{element.size_name}</span>
                </label>
            </li>
        )
    });
    // render component
    return(
        <>
            <SmallBanner title={titleRec}/>
            <div className="product-filter">
                <div className="wrapper">
                    <div className="product-filter__grid">
                        <div className="product-filter__filter">
                            <div className="product-filter__filter--size">
                                <div className="product-filter__filter__title" onClick={onShowFilterPrice}>
                                    <p>Giá</p>
                                    <i className={filterPrice?"fa fa-minus":"fa fa-plus"} aria-hidden="true"></i>
                                </div>
                                <div className={filterPrice?"product-filter__filter__contents":"product-filter__filter__contents--none"}>
                                    <ul>
                                        <li>
                                            <label >
                                                <input 
                                                    type="radio" 
                                                    value='0' 
                                                    name='filter-price'
                                                    onChange={onHandlePrice}
                                                />
                                                <span>Tất cả</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label >
                                                <input 
                                                    type="radio" 
                                                    value='1' 
                                                    name='filter-price'
                                                    onChange={onHandlePrice}
                                                />
                                                <span>Nhỏ hơn 100.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input 
                                                    type="radio" 
                                                    value='2' 
                                                    name='filter-price'
                                                    onChange={onHandlePrice}
                                                />
                                                <span>100.000đ - 499.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input 
                                                    type="radio" 
                                                    value='3' 
                                                    name='filter-price' 
                                                    onChange={onHandlePrice}
                                                />
                                                <span>500.000đ - 999.000đ</span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input 
                                                    type="radio" 
                                                    value='4' 
                                                    name='filter-price' 
                                                    onChange={onHandlePrice}
                                                />
                                                <span>Từ 1.000.000đ</span>
                                            </label>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="product-filter__filter--price">
                                <div className="product-filter__filter__title" onClick={onShowFilterSize}>
                                    <p>Kích cỡ</p>
                                    <i className={filterSize?"fa fa-minus":"fa fa-plus"} aria-hidden="true"></i>
                                </div>
                                <div className={filterSize?"product-filter__filter__contents":"product-filter__filter__contents--none"}>
                                    <ul>
                                        <li>
                                            <label >
                                                <input 
                                                    type="checkbox" 
                                                    value='0'
                                                    onChange={onhandleSize}
                                                />
                                                <span>Tất cả</span>
                                            </label>
                                        </li>
                                        {SizesFilterUI}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-filter__result-filter">
                            {
                                onResultFilterRec()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductFilter;