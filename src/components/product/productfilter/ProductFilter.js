import {  useState } from "react"
// import style library, Component
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import './ProductFilter.scss';

// code function here
function ProductFilter(props){
    // declare state component
    const [filterPrice, setFilterPrice] = useState(false);
    const [filterSize, setFilterSize] = useState(false);
    const [valFilterPrice, setValFilterPrice] = useState(null);
    const [valFilterSize, setValFilterSize] = useState([]);

    // get props
    const { 
        titleRec,
        onResultFilterRec,
        sizesFilterRec,
        sizes 
    } = props;

    // return option select
    const SizesFilterUI = sizes.map((element, index) => {
        return (
            <li key={index}>
                <label>
                    <input type="checkbox" value={sizes.id_size} />
                    <span>{element.size_name}</span>
                </label>
            </li>
        )
    });

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

        setValFilterPrice(value);
    }
    console.log(valFilterPrice);

    // handle when select size filter
    const onhandleSize = event => {
        const value = event.target.value;

        setValFilterSize([...valFilterSize].push(value));
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
                                            <label onChange={onHandlePrice}>
                                                <input 
                                                    type="radio" 
                                                    value='0' 
                                                    name='filter-price'
                                                />
                                                <span>Tất cả</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input 
                                                    type="radio" 
                                                    value='1' 
                                                    name='filter-price'
                                                />
                                                <span>Nhỏ hơn 100.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input type="radio" value='2' name='filter-price'/>
                                                <span>100.000đ - 500.000đ</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input type="radio" value='3' name='filter-price' />
                                                <span>500.000đ - 1.000.000đ</span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <label onChange={onHandlePrice}>
                                                <input type="radio" value='4' name='filter-price' />
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
                                        <li>
                                            <label>
                                                <input type="checkbox" value='0'/>
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