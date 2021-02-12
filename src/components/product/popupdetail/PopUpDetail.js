import './PopUpDetail.scss';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function PopUpDetail(props){
    // declare state and variable
    const dataSize = [36, 37, 38, 39];
    const [data,setData] = useState(['']);
    const [isToggle,setIsToggle] = useState(false);
    var indexCurrentProduct = -1;

    // load state data from database local
    useEffect(
        () => {
            setData(props.dataSource);
            setIsToggle(((props.isToggle=='true')?true:false));
        },[props.dataSource,props.isToggle]
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

    // active ui
    var onToggle = () => {
        setIsToggle(!isToggle);
        props.resetToggleQuickView();
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
                                <h2>Hello</h2>
                                <div className="product-detail__content__header__code">
                                    <p>Mã sản phẩm: 11</p>
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
                                        <p>Kích thước</p>
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
                                </div>
                                <div className="product-detail__content__count">
                                    <div className="product-detail__content__count__title">
                                    <p> Số lượng </p>
                                    </div>
                                    <div className="product-detail__content__count_select">
                                        <input type="button" value="-" onClick={
                                            () => {
                                                let count = document.getElementById("count-product").value;
                                                count = count - 1;
                                                if(count < 1){
                                                    count = 1;
                                                }
                                                document.getElementById("count-product").value = count;
                                            }
                                        }/>
                                        <input type="number" id="count-product" placeholder="1" min="1" disabled/>
                                        <input type="button" value="+" onClick={
                                            () =>{
                                                let count = document.getElementById("count-product").value;
                                                count = count*1 + 1;
                                                document.getElementById("count-product").value = count;
                                            }
                                        }/> 
                                    </div>
                                </div>
                                <div className="product-detail__content__action">
                                    <input type="button" value="Thêm vào giỏ" />
                                    <p>Hoặc <Link to="/products/1">xem chi tiết</Link></p>
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