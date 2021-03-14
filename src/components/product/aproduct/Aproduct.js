//import style library
import './Aproduct.scss';
import PopupProductContainer from '../../../containers/PopUpDetailContainer';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Aproduct(props) {
    // declare state and variable
    const [toggleQuickView, setToggleQuickView] = useState(false);
    var { data,sizeDetailsRec } = props;
    var { id_product, product_name, is_sale, price } = data;// get data from props
    
    // get list size of product
    var listSizeSelect = !sizeDetailsRec?[]:sizeDetailsRec.filter((element,index)=>{
        return element.id_product*1===id_product*1
    })
    // code function here
    var onToggleQuickView = () => {
        setToggleQuickView(true);
    }
    var resetToggleQuickView = () => {
        setToggleQuickView(false);
    }
    var onSelectItem = () => {
        props.onAddToCartRec(data,listSizeSelect[0].id_size);
    }
    
    return(
        <>
            <div className="aproduct">
                
                   <div className="aproduct__image">
                       
                       <Link to={"/products/"+id_product}>
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1" alt="demo" />
                            {
                                is_sale?
                                <div className="aproduct__sale">
                                    <p>-50%</p>
                                </div>:''
                            }
                            <div className='aproduct__sold-out'>Cháy hàng</div>
                        </Link>
                        <form action="" method="">
                            <div className="aproduct__image__select-wrapper">
                                <div className="aproduct__image__select">
                                    <button type="button" 
                                        className="aproduct__image__select__search-plus" 
                                        onClick={onToggleQuickView}
                                    >
                                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </button>
                                    <button type="button" className="aproduct__image__select__check-out">
                                       
                                        <Link to={"/products/"+id_product}>
                                            <p>Mua ngay</p>
                                        </Link>
                                    </button>
                                    <button type="button" 
                                        className="aproduct__image__select__cart-plus"
                                        onClick={onSelectItem}
                                    >
                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                   <hr />
                   <div className="aproduct__contents">
                    <div className="aproduct__contents__name">
                        <Link to={"/products/"+id_product}>
                            <p>{product_name}</p>
                        </Link>
                    </div>
                    <div className="aproduct-contents__price">
                        
                        <p>{price}<u>đ</u></p>
                        {/* <p><del>150000<u>đ</u></del></p> */}
                    </div>
                </div>
            
            </div>
            {toggleQuickView?
                <PopupProductContainer 
                    isToggle={toggleQuickView?"true":"false"} 
                    resetToggleQuickView={resetToggleQuickView} 
                    item={props.data} 
                />:
                ''
            }
        </>
    );
}
export default Aproduct;