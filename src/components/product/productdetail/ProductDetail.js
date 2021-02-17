import './ProductDetail.scss';
import { useEffect, useState } from 'react';

function ProductDetail(props){
    // declare state
    const [dataSize,setDataSize] = useState([36, 37, 38, 39]);
    const [data,setData] = useState(['']);
    const [amountProduct, setAmountProduct] = useState(1);
    var indexCurrentProduct = -1;
    

    

    // load state data from database local
    useEffect(
        () => {
            setData(props.dataSource);
            // scroll to top
            // window.scrollTo(0,0);
        },[props.dataSource]
    )

    // scroll to up
    // if(!isActiveEdit){
    //     window.scrollTo(0,0);
    // }
    // load value for detail product
    // var currentProduct;
    // data.forEach((item, index)=>{
    //     if((item.id+'')===id){
    //         currentProduct = item;
    //         indexCurrentProduct = index;
    //     }
    // })
    

    // remove boder color of select size
    var removeColor = () => {
        let size = document.getElementsByClassName("product-detail__content__size__one-select");
        for(let i=0;i<size.length;i++){
            size[i].style = "border 1px solid lightgray";
        }
    }

    // set value for state isActiveEdit
    var onToggleEdit = () => {
        // setIsActiveEdit(!isActiveEdit);
    }
    // set value for 
    var onSubmitProductDetail = (itemEdit) => {
        props.onSubmit(itemEdit, indexCurrentProduct);
    }


    return(
        // product detail
        <div className="product-detail">
            <div className="wrapper">
                <div className="product-detail-grid">

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

                    {/* open main */}
                    <div className="product-detail__main-image">
                        <div className="product-detail__main-image__image">
                            <img src="" alt="main"/>
                        </div>
                    </div>
                    {/* close main */}

                    {/* open product detail content */}
                    <div className="product-detail__content">
                        {/* open product detail content header */}
                        <div className="product-detail__content__header">
                            <h2>Hello</h2>
                            <div className="product-detail__content__header__brand">
                                <p>Thương Hiệu: <a>Brand 1</a></p>
                            </div><span> | </span>
                            <div className="product-detail__content__header__type">
                                <p>Loại: <a>Loai 1</a></p>
                            </div><span> | </span>
                            <div className="product-detail__content__header__code">
                                <p>Mã: 11</p>
                            </div>
                        </div>
                        {/* close product detail content header */}

                        {/* open product detail content price */}
                        <div className="product-detail__content__price">
                            <div className="product-detail__content__price__current-price">
                                <p>1000000 <u>đ</u></p>
                            </div>
                            <div className="product-detail__content__price__original-price">
                                <del>385,000<u>đ</u></del>
                            </div>
                            <div className="product-detail__content__price__sale">
                                <p>(Bạn đã tiết kiệm được 192,000<u>đ</u>)</p>
                            </div>
                        </div>
                        {/* close product detail content price */}
                    
                        {/* open form select product */}
                        <form action="" method="" id="add-to-cart">
                            <div className="product-detail__content__size">
                                <div className="product-detail__content__size__title">
                                    Kích thước
                                </div>
                                <div className="product-detail__content__size__select">
                                    {
                                        dataSize.map((value,index) =>                                
                                            <div key={index} className="product-detail__content__size__one-select" onClick={(event)=>{
                                                removeColor();
                                                event.target.style = "border: 1px solid red";
                                            }}>
                                                {value}
                                            </div>
                                        )
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
                                            if(amountProduct > 1) setAmountProduct(amountProduct-1)
                                        }
                                    }/>
                                    <input type="number" id="count-product" value={amountProduct} disabled/>
                                    <input type="button" value="+" onClick={
                                        () => setAmountProduct(amountProduct+1)
                                    }/> 
                                </div>
                            </div>
                            <div className="product-detail__content__action">
                                <input type="button" value="Thêm vào giỏ" />
                                <input type="button" value="Mua ngay"/>
                            </div>
                        </form>
                        {/* close form select product */}

                        {/* open product description */}
                        <div className="product-detail__content__description">
                            <p>Giày Chuẩn Euro Giá Ưu Việt</p>
                            <p>Thông tin sản phẩm</p>
                            <p>Chất Liệu: Da tổng hợp</p>
                            <p>Phù hợp sử dụng: đi làm, đi chơi, đi tiệc.</p>
                            <p>Chất liệu : Đế cao su thiên</p>
                            <p>CHẾ ĐỘ BẢO HÀNH ĐẢM BẢO GIÀY CHO KHÁCH HÀNG KHI MUA.</p>
                            <p>- Bảo hành đổi mới nếu giày bị lỗi trong vòng 6 tháng</p>
                            <p>-Hỗ trợ đổi size trong vòng 1 tuần</p>
                            <p>
                                <img src="" alt="toturial select size"/>
                            </p>
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
            </div>
        </div>
    );
}
export default ProductDetail;