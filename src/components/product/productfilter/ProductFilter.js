import {  useState } from "react"
// import style library, Component
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import './ProductFilter.scss';

// code function here
function ProductFilter(props){
    // declare state component
    const [filterPrice, setFilterPrice] = useState(false);
    const [filterSize, setFilterSize] = useState(false);

    // get props
    const { 
        titleRec,
        onResultFilterRec,
        sizesFilterRec 
    } = props;

    // function use when use click
    const onShowFilterPrice = () => {
        setFilterPrice(!filterPrice);
    }
    const onShowFilterSize = () => {
        setFilterSize(!filterSize);
    }

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
                                            <label>
                                                <input type="radio" />
                                                <span>Nhỏ hơn 100.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>100.000đ - 500.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>500.000đ - 1.000.000đ</span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>Lớn hơn 1.000.000đ</span>
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
                                        {sizesFilterRec}
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