//import style library
import './Aproduct.scss';
import PopupProduct from '../popupdetail/PopUpDetail';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Aproduct() {
    // declare state and variable
    const [toggleQuickView, setToggleQuickView] = useState(false);

    // code function here
    var onToggleQuickView = () => {
        setToggleQuickView(true);
    }
    var resetToggleQuickView = () => {
        setToggleQuickView(false);
    }

    return(
        <>
            <div className="aproduct">
                
                   <div className="aproduct__image">
                       
                       <Link to="/products/1">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1" alt="demo" />
                            <div className="aproduct__sale">
                                <p>-50%</p>
                            </div>
                        </Link>
                       
                        <div className="aproduct__image__select-wrapper">
                            <div className="aproduct__image__select">
                                <button type="button" className="aproduct__image__select__search-plus" onClick={onToggleQuickView}>
                                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                                </button>
                                <button type="button" className="aproduct__image__select__check-out">
                                    <p>Mua ngay</p>
                                </button>
                                <button type="button" className="aproduct__image__select__cart-plus">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                   <hr />
                   <div className="aproduct__contents">
                    <div className="aproduct__contents__name">
                        <Link to="/products/1">
                            <p>C18 BLK/WHT</p>
                        </Link>
                    </div>
                    <div className="aproduct-contents__price">
                        
                        <p>100000<u>đ</u></p>
                        <p><del>150000<u>đ</u></del></p>
                    </div>
                </div>
            
            </div>
            <PopupProduct isToggle={toggleQuickView?"true":"false"} resetToggleQuickView={resetToggleQuickView} />
        </>
    );
}
export default Aproduct;