// import style library, component
import './ResultFilter.scss';
import {connect} from "react-redux";
import SingleProduct from '../../aproduct/Aproduct';
import { useState } from 'react';

// cose function here
function ResultFilter(props) {
    // declare state component
    const [recentPage, setRecentPage] = useState(1);
    // const { page } = useParams();
    	
    // const { params } = props.match;

    // console.log('page from URL props.match: ' + params.page);

    // console.log('page from URL: ' + page);

    // declare product count per page
    let productCount = 3;
    // load data from store
    var { listProduct } = props;
    
    // slice item for page view
    let indexStart = (recentPage-1)*productCount;
    let indexEnd = recentPage*productCount;
    var indexMax = Math.ceil(listProduct.length/productCount);

    // return interface
    var listIndex = listProduct.slice(indexStart,indexEnd).map((item, index) => {
        return (
            <SingleProduct key={index} data={item}/>
        )
    });
    // handle page number up
    var onPageNumberUp = () => {
        setRecentPage(recentPage+1);
    };
    // handle page number down
    var onPageNumberDown = () => {
        setRecentPage(recentPage-1);
    };


    return(
        <div className="result-filter">
            <div className="result-filter__head">
                <div className="result-filter__head__title">
                    <h1>Tất cả sản phẩm</h1>
                </div>
                <div className="result-filter__head__filter">
                   <span>Sắp xếp</span>
                   <select defaultValue="2">
                       <option value="0">Tùy chọn</option>
                       <option value="1">Sản phẩm bán chạy</option>
                       <option value="2">Theo bảng chữ cái A-Z</option>
                       <option value="3">Theo bảng chữ cái Z-A</option>
                       <option value="4">Giá từ cao tới thấp</option>
                       <option value="5">Giá từ thấp tới cao</option>
                       <option value="6">Mới nhất</option>
                       <option value="7">Cũ nhất</option>
                   </select>
                </div>
            </div>
            
            <div className="result-filter__body">
                {
                    listIndex
                }
            </div>
            <div className="result-filter__pagination">
                <button type='button' onClick={onPageNumberDown} className={(recentPage===1)?"result-filter__pagination__button-hidden":""}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button type='button' onClick={onPageNumberUp} className={(recentPage===indexMax)?"result-filter__pagination__button-hidden":""}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}
const mapStateToPropsResultFilter = state => {
    return {
        listProduct: state.ListProduct
    }
}
export default connect(mapStateToPropsResultFilter, null)(ResultFilter);