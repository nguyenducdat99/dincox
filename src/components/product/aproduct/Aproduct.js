//import style library
import './Aproduct.scss';
import PopupProductContainer from '../../../containers/PopUpDetailContainer';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import * as Actions from '../../../constants/Config';
import * as ConvertState from '../../../commons/HandleState';


function Aproduct(props) {
    // declare state and variable
    const [toggleQuickView, setToggleQuickView] = useState(false);

    // get props
    const { 
        data, 
        sizeDetailsRec, 
        imagesRec,
        saleDetails,
        onAddToCartRec 
    } = props;

    // get value of props data
    const { 
        id_product, 
        product_name, 
        is_sale, 
        price 
    } = data;
    
    // get list size of product
    const listSizeSelect = !sizeDetailsRec?
    []:
    sizeDetailsRec.filter(
        element => {
            return element.id_product*1===id_product*1
        }
    )

    // get quantity of product
    var quantity = 0;
    if (listSizeSelect.length!==0) {
        listSizeSelect.forEach(
            element => {
                quantity = quantity + element.quantity;
            }
        );
    }

    // get images for item
    var path = findImages(imagesRec,id_product);
    
    // conver path
    path = '' + Actions.API_URL + path[0];

    // handle when click open quick view
    const onToggleQuickView = () => {
        setToggleQuickView(true);
    }

    // close quick view
    const resetToggleQuickView = () => {
        setToggleQuickView(false);
    }

    // handle when select item add to card
    const onSelectItem = () => {
        if (quantity===0) {
            return alert('Sản phẩm đã hết!');
        }
        onAddToCartRec(data,listSizeSelect[0].id_size);
    }

    // get discount
    var discount = 0;
    if (saleDetails.length>0)
        discount = ConvertState.findDiscountForProduct(id_product,saleDetails)[0].discount


    // return ui component
    return(
        <>
            <div className="aproduct">
                
                   <div className="aproduct__image">
                       
                       <Link to={"/products/"+id_product}>
                            <img 
                                src={path} 
                                alt={product_name} 
                                onLoad={event=>event.target.style='opacity: 1'}
                            />
                            {
                                (is_sale&&discount!==0)?
                                <div className="aproduct__sale">
                                    <p>{'-' + discount + '%'}</p>
                                </div>:''
                            }
                            {
                                (listSizeSelect.length!==0&&quantity!==0)?
                                '':
                                <div className='aproduct__sold-out'>Cháy hàng</div>
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
                    isToggle={toggleQuickView?true:false} 
                    resetToggleQuickView={resetToggleQuickView} 
                    item={data} 
                    discount={discount}
                />:
                ''
            }
        </>
    );
}


function findImages(items,id) {
    let result = [];
    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    result.sort(function(a, b){return a.id_image - b.id_image})

    return result;
}


export default Aproduct;