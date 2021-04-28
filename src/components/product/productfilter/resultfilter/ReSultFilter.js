// import style library, component
import './ResultFilter.scss';
import SingleProduct from '../../aproduct/Aproduct';
import { useEffect, useState } from 'react';
import * as types from '../../../../constants/ActionTypes';

// cose function here
function ResultFilter(props) {
    // declare state component
    const [recentPage, setRecentPage] = useState(1);
    const [presentCategory, setPresentCategory] = useState(false);

    // declare product count per page
    const productCount = 6;

    // get props
    const { 
        listProductRec,
        titleRec,
        sizeDetails,
        images,
        saleDetails,
        onAddToCart,
        idCategory,
        onSort
    } = props;
    
    // declare state component
    const [sortType,setSortType] = useState(types.NAME_UP);

    // load data
    useEffect(
        () => {
            setPresentCategory(idCategory);
            setRecentPage(1);
        },[idCategory]
    )

    // slice item for page view
    const indexStart = (recentPage-1)*productCount;
    const indexEnd = recentPage*productCount;


    // filter product using category
    const listIndexFilter = listProductRec.filter(
        element => {
            if (!idCategory) return true;
            return element.id_category*1 === presentCategory*1;
        }
    )

    // find product quantity max for page
    const indexMax = Math.ceil(listIndexFilter.length/productCount);
        
    // return ui
    const listIndex = listIndexFilter.slice(indexStart,indexEnd).map((item, index) => {
        return (
            <SingleProduct 
                key={index} 
                data={item}
                onAddToCartRec={onAddToCart}
                sizeDetailsRec={sizeDetails} 
                imagesRec={images}
                saleDetails={saleDetails}
            />
        )
    });

    

    // handle page number up
    const onPageNumberUp = () => {
        setRecentPage(recentPage+1);
    };
    // handle page number down
    const onPageNumberDown = () => {
        setRecentPage(recentPage-1);
    };


    // handle when change type sort
    const onHandleChange = event => {
        const value = event.target.value;

        setSortType(value);
        onSort(value);
    }

    //return ui
    return(
        <div className="result-filter">
            <div className="result-filter__head">
                <div className="result-filter__head__title">
                    <h1>{titleRec}</h1>
                </div>
                <div className="result-filter__head__filter">
                    <span>Sắp xếp</span>
                    <select 
                        value={sortType}
                        onChange={onHandleChange}
                    >
                       <option value={types.NAME_UP}>Theo bảng chữ cái A-Z</option>
                       <option value={types.NAME_DOWN}>Theo bảng chữ cái Z-A</option>
                       <option value={types.PRICE_DOWN}>Giá từ cao tới thấp</option>
                       <option value={types.PRICE_UP}>Giá từ thấp tới cao</option>
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
                <button type='button' onClick={onPageNumberUp} className={(recentPage===indexMax||listIndex.length<productCount)?"result-filter__pagination__button-hidden":""}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}
export default ResultFilter;