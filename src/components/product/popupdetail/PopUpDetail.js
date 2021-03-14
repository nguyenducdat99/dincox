import './PopUpDetail.scss';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function findSizeName(items,id) {
    let result = '';
    items.forEach((element,index) => {
        if (element.id_size*1===id*1) result = element.size_name
    })

    return result;
}

function PopUpDetail(props){
    // declare state and variable
    const [sizeSelected,setSizeSelected] = useState(0);
    const [isToggle,setIsToggle] = useState(false);
    const [quantity, setQuantity] = useState(1); 

    // get props
    const { item, sizeDetailsRec, sizesRec,onAddToCartRec } = props;

    // get data from props
    var { id_product, product_name, price } = item;

    // load state data from database local
    useEffect(
        () => {
            setIsToggle(((props.isToggle==='true')?true:false));
        },[props.isToggle]
    )

    // active ui
    var onToggle = () => {
        setIsToggle(!isToggle);
        props.resetToggleQuickView();
    }

    // get list size of product
    var listSizeSelect = sizeDetailsRec.filter((element,index)=>{
        return element.id_product*1===id_product*1
    })

    // get max quantity product from selected size
    var quantityMax = listSizeSelect[sizeSelected].quantity;
    if (quantity>quantityMax) setQuantity(quantityMax);

    // get list size name of product
    var listSizeSelectName = listSizeSelect.map((element, index) => {
        return findSizeName(sizesRec,element.id_size);
    })

    // return list size name ui
    var listSizeSelectNameUi = listSizeSelectName.map((element,index) =>                                
    <div key={index} 
        className={"product-detail__content__size__one-select " +
            (index===sizeSelected?"product-detail__content__size__active-select":"")
        }
        onClick={
            () => {
                setSizeSelected(index)
            }
        }
    >
        {
            element
        }
    </div>
    )
        
    // hanle when click add to cart
    var addToCart =  () => {
        onAddToCartRec(item,listSizeSelect[sizeSelected].id_size,quantity);
        alert('Thêm vào giỏ thành công!');
    }   


    return(
        // product detail
        <div  className={isToggle?"pop-up-detail__wrapper":"pop-up-detail__wrapper--hidden"}>
            <div className="pop-up-detail">
                <div className="wrapper">
                    <div className="pop-up-detail__button" onClick={onToggle}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="product-detail-grid">
                        {/* open main */}
                        <div className="product-detail__main-image">
                            <div className="product-detail__main-image__image">
                                <img src="" alt="main"/>
                            </div>
                            {/* open list small */}
                            <div className="product-detail__list-image">
                                <div className="product-detail__list-image__image">
                                    <img src='' alt="small"/>
                                </div>
                                <div className="product-detail__list-image__image">
                                    <img src='' alt="small"/>
                                </div>
                                <div className="product-detail__list-image__image">
                                    <img src='' alt="small"/>
                                </div>
                            </div>
                            {/* close list small */}
                        </div>
                        {/* close main */}

                        {/* open product detail content */}
                        <div className="product-detail__content">
                            {/* open product detail content header */}
                            <div className="product-detail__content__header">
                                <h2>{product_name}</h2>
                                <div className="product-detail__content__header__code">
                                    <p>Mã sản phẩm: {'Dincox'+id_product}</p>
                                </div>
                            </div>
                            {/* close product detail content header */}

                            {/* open product detail content price */}
                            <div className="product-detail__content__price">
                                <div className="product-detail__content__price__current-price">
                                    <p>{price} <u>đ</u></p>
                                </div>
                                <div className="product-detail__content__price__original-price">
                                    <del>{price*110/100}<u>đ</u></del>
                                </div>
                                <div className="product-detail__content__price__sale">
                                    <p>(Bạn đã tiết kiệm được {price*10/100}<u>đ</u>)</p>
                                </div>
                            </div>
                            {/* close product detail content price */}
                        
                            {/* open form select product */}
                            <form action="" method="">
                                <div className="product-detail__content__size">
                                    <div className="product-detail__content__size__title">
                                        <p>Kích thước</p>
                                    </div>
                                    <div className="product-detail__content__size__select">
                                        {
                                            listSizeSelectNameUi
                                        }
                                    </div>
                                </div>
                                <div className="product-detail__content__count">
                                    <div className="product-detail__content__count__title">
                                    <p> Số lượng </p>
                                    </div>
                                    <div className="product-detail__content__count_select">
                                        <input type="button" value="-" onClick={
                                            () => {
                                                if(quantity>1) setQuantity(quantity-1);
                                            }
                                        }/>
                                        <input type="number" value={quantity} disabled/>
                                        <input type="button" value="+" onClick={
                                                () => setQuantity(quantity+1)
                                            }
                                            disabled={quantity<quantityMax?false:true}
                                        /> 
                                    </div>
                                </div>
                                <div className="product-detail__content__action">
                                    <input type="button" value="Thêm vào giỏ"  onClick={addToCart}/>
                                    <p>Hoặc <Link to={"/products/"+id_product}>xem chi tiết</Link></p>
                                </div>
                            </form>
                            {/* close form select product */}

                        
                        </div>
                        {/* close product detail content */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PopUpDetail;