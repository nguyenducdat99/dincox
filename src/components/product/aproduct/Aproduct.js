//import style library
import './Aproduct.scss';
import PopupProductContainer from '../../../containers/PopUpDetailContainer';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import * as Actions from '../../../constands/ActionTypes';


function findImages(items,id) {
    let result = [];
    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    result.sort(function(a, b){return a.id_image - b.id_image})

    return result;
}

function Aproduct(props) {
    // declare state and variable
    const [toggleQuickView, setToggleQuickView] = useState(false);

    // get props
    var { data, sizeDetailsRec, imagesRec } = props;

    // get value of props data
    var { id_product, product_name, is_sale, price } = data;// get data from props
    
    // get list size of product
    var listSizeSelect = !sizeDetailsRec?[]:sizeDetailsRec.filter(element=>{
        return element.id_product*1===id_product*1
    })

    // get quantity of product
    var quantity = 0;
    if (listSizeSelect.length!==0) {
        listSizeSelect.forEach(element => {
            quantity = quantity + element.quantity;
        });
    }

    // get images for item
    var path = findImages(imagesRec,id_product);
    
    // conver path
    path = '' + Actions.DOMAINT_SERVER + path[0];

    // code function here
    var onToggleQuickView = () => {
        setToggleQuickView(true);
    }
    var resetToggleQuickView = () => {
        setToggleQuickView(false);
    }
    var onSelectItem = () => {
        if (quantity===0) {
            return alert('Sản phẩm đã hết!');
        }
        props.onAddToCartRec(data,listSizeSelect[0].id_size);
    }

    // get discount
    const discount = 25;

    return(
        <>
            <div className="aproduct">
                
                   <div className="aproduct__image">
                       
                       <Link to={"/products/"+id_product}>
                            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1" alt="demo" /> */}
                            <img src={path} alt={product_name} />
                            {
                                is_sale?
                                <div className="aproduct__sale">
                                    <p>{'-' + discount + '%'}</p>
                                </div>:''
                            }
                            {
                                (listSizeSelect.length!==0&&quantity!==0)?'':<div className='aproduct__sold-out'>Cháy hàng</div>
                            }
                            
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
                    {
                        is_sale?
                        <div className="aproduct-contents__price">
                            <p>{price/100*(100-discount)}<u>đ</u></p>
                            <p><del>{price}<u>đ</u></del></p>
                        </div>:
                        <div className="aproduct-contents__price">
                            <p>{price}<u>đ</u></p>
                            <p><del></del></p>
                        </div>
                    }
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