// import style library, Image, component
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './VerticalMenu.scss';

// code function here
function VerticalMenu(props) {
    // get Props
    const {
        showVerticalMenu,
        onCloseMenu,
        liveAccountRec,
        onLogoutAccount,
        listCategoryRec
    } = props;

    // decalre state
    const [showMenu2, setShowMenu2] = useState(false);

    // handle when click button menu level 2
    const onToggleMenu2 = () => {
        setShowMenu2(!showMenu2);
    }


    // // handle when submit
    // const onHandleSubmit = event => {
    //     event.preventDefault();
    // }

    return(
        <>
            <div className={showVerticalMenu?"vertical-menu vertical-menu--show":"vertical-menu"}>
                <div className="vertical-menu__close">
                    <label
                        onClick={()=> onCloseMenu()}
                    >
                        Thoát &nbsp;
                        <span className="fa fa-times" aria-hidden="true"></span>
                    </label>
                </div>
                <div className='vertical-menu__body'>
                    {/* <div className='vertical-menu__body__search'>
                        <form action='' method='' onSubmit={onHandleSubmit}>
                            <input type='text' placeholder='Tìm sản phẩm...'/>
                            <button type='submit'>
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div> */}
                    <div className='vertical-menu__body__navigation'>
                        <ul>
                            <li>
                                <p>
                                    Sản phẩm
                                    <i 
                                        className={
                                            showMenu2?
                                            "fa fa-minus":
                                            "fa fa-plus"
                                        } 
                                        aria-hidden="true"
                                        onClick={onToggleMenu2}    
                                    ></i>
                                </p>
                                {
                                    showMenu2?
                                    <ul className='menu-lv-2'>
                                        {listCategoryRec(0,onCloseMenu)}
                                    </ul>:''
                                }
                            </li>
                            <li>
                                <Link  
                                    to='/sale-off'
                                    onClick={()=> onCloseMenu()}
                                >
                                    Sale off
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to='/orders'
                                    onClick={()=> onCloseMenu()}
                                >Kiểm tra đơn hàng</Link>
                            </li>
                            <li>
                                <Link  
                                    to='/store-location'
                                    onClick={()=> onCloseMenu()}
                                >
                                    Hệ thống cửa hàng
                                </Link>
                            </li>
                            <li>
                                <Link  
                                    to='/search'
                                    onClick={()=> onCloseMenu()}
                                >
                                    Tìm kiếm sản phẩm
                                </Link>
                            </li>
                            <li>
                                
                                {
                                    liveAccountRec.user_name===''?
                                    <Link to='/account/login'
                                        onClick={()=> onCloseMenu()}
                                    >Đăng nhập</Link>:
                                    <>
                                        <span>Chào,{liveAccountRec.user_name}</span>
                                        &nbsp;
                                        <span 
                                            className="fa fa-sign-out" 
                                            aria-hidden="true"
                                            onClick={onLogoutAccount}
                                        ></span>
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VerticalMenu;