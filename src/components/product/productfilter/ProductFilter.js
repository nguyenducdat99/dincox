import { Component, useState } from "react"
// import style library, Component
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import ResultFilter from './resultfilter/ReSultFilter';
import './ProductFilter.scss';

// code function here
function ProductFilter(){
    // declare state component
    const [filterPrice, setFilterPrice] = useState(false);
    const [filterSize, setFilterSize] = useState(false);

    // function use when use click
    var onShowFilterPrice = () => {
        setFilterPrice(!filterPrice);
    }
    var onShowFilterSize = () => {
        setFilterSize(!filterSize);
    }

    // render component
    return(
        <>
            <SmallBanner title="Tất cả sản phẩm"/>
            <div className="product-filter">
                <div className="wrapper">
                    <div className="product-filter__grid">
                        <div className="product-filter__filter">
                            <div className="product-filter__filter--size">
                                <div className="product-filter__filter__title" onClick={onShowFilterPrice}>
                                    <p>Giá</p>
                                    <i className={filterPrice?"fa fa-plus":"fa fa-minus"} aria-hidden="true"></i>
                                </div>
                                <div className={filterPrice?"product-filter__filter__contents":"product-filter__filter__contents--none"}>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="product-filter__filter--price">
                                <div className="product-filter__filter__title" onClick={onShowFilterSize}>
                                    <p>Kích cỡ</p>
                                    <i className={filterSize?"fa fa-plus":"fa fa-minus"} aria-hidden="true"></i>
                                </div>
                                <div className={filterSize?"product-filter__filter__contents":"product-filter__filter__contents--none"}>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span>35</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-filter__result-filter">
                            <ResultFilter/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductFilter;