import './ProductDetail.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as constants from '../../../constants/Config';
import * as ConvertState from '../../../commons/HandleState';
import ImageZoom from 'react-medium-image-zoom';

function ProductDetail(props){
    // // load facebook sdk.js
    useEffect(
        () => {
            const fb = document.createElement("script");
            fb.async = true;
            fb.src = 'https://connect.facebook.net/vi_VN/sdk.js'
            document.body.appendChild(fb);

            const facebookScript = document.createElement("script");
            facebookScript.innerHTML = `
                window.fbAsyncInit = function() {
                    FB.init({
                    appId      : '250130313471996',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v10.0'
                    });
                };`

            document.body.appendChild(facebookScript);
            if (window.FB) {
                window.FB.XFBML.parse();
            }
            
        },[]
    )

    // declare state component
    // eslint-disable-next-line
    const [sizeSelected,setSizeSelected] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState('');

    // get id from url
    const { id } = useParams();

    //get props
    const { 
        productsRec, 
        sizeDetailsRec, 
        sizesRec, 
        categoriesRec, 
        onAddToCartRec, 
        imagesRec,
        saleDetails 
    } = props;
    
    // get current product
    const currentProduct = findCurrentProduct(productsRec,id);

    // get data for product detail
    const { 
        id_product,
        id_category, 
        product_name, 
        price, 
        description, 
        is_sale 
    } = currentProduct;
    
    // get category name for product
    const categoryName = findCategoryName(categoriesRec,id_category);


    // get list size of product
    const listSizeSelect = sizeDetailsRec.filter((element,index)=>{
        return element.id_product*1===id*1&&element.quantity!==0
    })

    // get max quantity product from selected size
    const quantityMax = listSizeSelect[sizeSelected]?listSizeSelect[sizeSelected].quantity:0;
    if (quantity>quantityMax) setQuantity(quantityMax);


    // get list size name of product
    const listSizeSelectName = listSizeSelect.map((element, index) => {
        return findSizeName(sizesRec,element.id_size);
    })

    // return list size name ui
    const listSizeSelectNameUi = listSizeSelectName.map((element,index) =>                                
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

    
    // get images for item
    const path = findImages(imagesRec,id_product);

    // return list small images
    const listSmallImage = path.map(
        (element,index) => {
            return (
                <div key={index} 
                    className="product-detail__list-image__image"
                >
                    <img 
                        src={'' + constants.API_URL + element} 
                        alt={"demo"+index}
                        onLoad={event=>event.target.style='opacity: 1'}
                        onClick={
                            () => {
                                setMainImage('' + constants.API_URL + element)
                            }
                        }
                    />
                </div>
            )
        }
    )
    
    // conver path
    useEffect(
        () => {
            if (path[0]) setMainImage('' + constants.API_URL + path[0]);
            // eslint-disable-next-line
        },[]
    )

    // hanle when click add to cart
    const addToCart =  () => {
        onAddToCartRec(currentProduct,listSizeSelect[sizeSelected].id_size,quantity);
        alert('Thêm vào giỏ thành công!');
    }    

    // get discount
    var discount = 0;
    if (is_sale&&saleDetails.length>0)
        discount = ConvertState.findDiscountForProduct(id_product,saleDetails).length>0?
            ConvertState.findDiscountForProduct(id_product,saleDetails)[0].discount:
            discount;


    // return ui
    return(
        <>
            <SmallBanner title="Chi tiết sản phẩm" title2={product_name}/>
            
            <div className="product-detail">
                <div className="wrapper">
                    <div className="product-detail-grid">

                        {/* open list small */}
                        <div className="product-detail__list-image">
                        {
                            listSmallImage
                        }   
                        </div>
                        {/* close list small */}

                        {/* open main */}
                        <div className="product-detail__main-image">
                            <div className="product-detail__main-image__image">
                                {/* <img src={path} alt={product_name}/> */}
                                <ImageZoom
                                    image={{
                                        src: mainImage,
                                        alt: product_name,
                                        style: { 
                                            width: '100%' ,
                                            height: '100%'
                                        }
                                    }}
                                    zoomImage={{
                                        src: mainImage,
                                        alt: product_name
                                    }}
                                />
                            </div>
                        </div>
                        {/* close main */}

                        {/* open product detail content */}
                        <div className="product-detail__content">
                            {/* open product detail content header */}
                            <div className="product-detail__content__header">
                                <h2>{product_name}</h2>
                                <div className="product-detail__content__header__brand">
                                    <p>Thương Hiệu: <a href='/#'>Dincox</a></p>
                                </div><span> | </span>
                                <div className="product-detail__content__header__type">
                                    <p>Loại: <a  href='/#'>{ categoryName }</a></p>
                                </div><span> | </span>
                                <div className="product-detail__content__header__code">
                                    <p>Mã: {'Dincox' + id_product}</p>
                                </div>
                            </div>
                            {/* close product detail content header */}

                            {/* open product detail content price */}
                            {
                                (is_sale&&discount!==0)?
                                <div className="product-detail__content__price">
                                    <div className="product-detail__content__price__current-price">
                                        <p>{price*(100-discount)/100} <u>đ</u></p>
                                    </div>
                                    <div className="product-detail__content__price__original-price">
                                        <del>{price}<u>đ</u></del>
                                    </div>
                                    <div className="product-detail__content__price__sale">
                                        <p>(Bạn đã tiết kiệm được {price*discount/100}<u>đ</u>)</p>
                                    </div>
                                </div>:
                                <div className="product-detail__content__price">
                                    <div className="product-detail__content__price__current-price">
                                        <p>{price} <u>đ</u></p>
                                    </div>
                                </div>
                            }
                            {/* close product detail content price */}
                        
                            {/* open form select product */}
                            <form action="" method="" id="add-to-cart">
                                <div className="product-detail__content__size">
                                    <div className="product-detail__content__size__title">
                                        {
                                            quantityMax===0?'Hết hàng':'Kích thước'
                                        }
                                    </div>
                                    <div className="product-detail__content__size__select">
                                        {
                                            listSizeSelectNameUi
                                        }
                                    </div>
                                    <div className="product-detail__content__support">
                                        <p><i className="fa fa-mobile" aria-hidden="true"></i> Hotline: 29384696534</p>
                                    </div>
                                </div>
                                <div className="product-detail__content__count">
                                    <div className="product-detail__content__count__title">
                                        Số lượng
                                    </div>
                                    <div className="product-detail__content__count_select">
                                        <input type="button" value="-" onClick={
                                            () => {
                                                if(quantity > 1) setQuantity(quantity-1)
                                            }
                                        }/>
                                        <input type="number" id="count-product" value={quantity} disabled/>
                                        <input type="button" value="+" onClick={
                                            () => setQuantity(quantity+1)
                                        }
                                            disabled={quantity<quantityMax?false:true}
                                        /> 
                                    </div>
                                </div>
                                <div className="product-detail__content__action">
                                    <input type="button" 
                                        value="Thêm vào giỏ" 
                                        disabled={quantityMax===0?true:false}
                                        onClick={addToCart}
                                    />
                                    {/* <input type="button" value="Mua ngay"/> */}
                                </div>
                            </form>
                            {/* close form select product */}

                            {/* open product description */}
                            <div className="product-detail__content__description">
                                {description}
                            </div>
                            {/* close product description */}
                            {/* open transport */}
                            <div className="product-detail__content__transport">
                                <div className="product-detail__content__transport__item">
                                    <i className="fa fa-ambulance" aria-hidden="true"></i>
                                    <p className="title">Giao Hàng Toàn Quốc</p>
                                </div>
                                <div className="product-detail__content__transport__item">
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                    <div>
                                        <p className="title">Hotline Hỗ trợ</p>
                                        <p>0961 988 840</p>
                                    </div>
                                </div>
                                <div className="product-detail__content__transport__item">
                                <i className="fa fa-check" aria-hidden="true"></i>
                                    <div>
                                        <p className="title">Chính sách bảo hành</p>
                                        <p>+ Bảo hành đổi mới các sản phẩm bị lỗi của nhà sản xuất trong vòng 6 tháng,

                                                <br/>+ Hỗ trợ đổi trả trong vòng 7 ngày.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* close transport */}
                        </div>
                        {/* close product detail content */}
                    </div>
                    <div className='product-detail__comment'>
                        <div className="fb-comments" 
                            data-href={"http://localhost:3000/products/"+id}
                            data-width="100%" data-numposts="5"
                        ></div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

function findCurrentProduct(items,id) {
    let result = {
        id_product: 0,
        id_category: 0, 
        product_name: 'DinCox',
        price: 0,
        description: ''
    }

    items.forEach((item, index)=>{
        if(item.id_product*1===id*1){
            result = item;
        }
    })

    return result;
}

function findSizeName(items,id) {
    let result = '';
    items.forEach((element,index) => {
        if (element.id_size*1===id*1) result = element.size_name
    })

    return result;
}

function findCategoryName(items,id) {
    let result = '';
    items.forEach((element,index) => {
        if (element.id_category*1===id*1) result = element.category_name
    })

    return result;
}


function findImages(items,id) {
    let result = [];
    
    items.sort(function(a, b){return b.id_image - a.id_image})
    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    return result;
}

export default ProductDetail;