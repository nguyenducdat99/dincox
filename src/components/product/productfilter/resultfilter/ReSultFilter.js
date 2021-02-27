// import style library, component
import './ResultFilter.scss';
import {connect} from "react-redux";
import SingleProduct from '../../aproduct/Aproduct';

// cose function here
function ResultFilter(props) {
    

    // load data from store
    var { listProduct } = props;
    var listIndex = listProduct.map((item, index) => {
        return (
            <SingleProduct key={index} data={item}/>
        )
    });

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
        </div>
    )
}
const mapStateToPropsResultFilter = state => {
    return {
        listProduct: state.ListProduct
    }
}
export default connect(mapStateToPropsResultFilter, null)(ResultFilter);