import { Component, useState } from "react"
// import style library, Component
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import './ProductFilter.scss';

// code function here
function ProductFilter(){
    const [filterPrice, setFilterPrice] = useState(true);
    var onShowFilterPrice = () => {
        setFilterPrice(!filterPrice);
    }
    return(
        <>
            <SmallBanner title="Tất cả sản phẩm"/>
            <div className="product-filter">
                <div className="wrapper">
                    <div className="product-filter__grid">
                        <div className="product-filter__filter">
                            <div className="product-filter__filter--size">
                                <div className="product-filter__filter__title" onClick={onShowFilterPrice}>
                                    <p>Kích cỡ</p>
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
                                <div className="product-filter__filter__title" onClick={onShowFilterPrice}>
                                    <p>Kích cỡ</p>
                                    <i className={filterPrice?"fa fa-plus":"fa fa-minus"} aria-hidden="true"></i>
                                </div>
                                <div className={filterPrice?"product-filter__filter__contents":"product-filter__filter__contents--none"}>
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
                            b
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductFilter;