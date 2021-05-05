import { useEffect, useState } from 'react';
import './Header.scss';
import logo from './logo-dincox.png';
import SupportContainer from '../../containers/SupportContainer';
import { Link, useHistory } from 'react-router-dom';
import VerticalMenu from '../fixcontents/verticalmenu/VerticalMenu';


function Header(props) {
    // declare state component
    // const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [isActiveHeader, setIsActiveHeader] = useState(false);
    const [showVerticalMenu, setShowVerticalMenu] = useState(false);
    let history = useHistory();

    //get props
    const { 
        quantityRec,
        listCategoryRec,
        liveAccountRec,
        onLogoutAccount 
    } = props;

    // handle toggle vertical menu
    const onToggleVerticalMenu = () => {
        setShowVerticalMenu(!showVerticalMenu);
    }
    
    // handle when logout
    const onLogout = () => {
        onLogoutAccount();
        history.replace('/account/login');
    }


    // handle effect when resize view
    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                if(window.scrollY>40){
                    setIsActiveHeader(true);
                }else{
                    setIsActiveHeader(false);
                }
            })

            window.addEventListener('resize', () => {

                if(window.innerWidth>992) {
                    setShowVerticalMenu(false);
                }
            })

        },[]
    )

   

    return(
        <>
            <div className={!isActiveHeader?"header":"header header-fix"}>
                <div className="wrapper">
                    <div className="header-grid">
                        <div className="header-grid__logo">
                            <h1>
                                <Link to="/">
                                    <img src={logo} alt=""/>    
                                </Link>
                            </h1>
                        </div>
                        <nav className="header-grid__navigation">
                            {/* navigation link  */}
                            <div className="header-grid__navigation__link">
                                <ul>
                                    <li className="header-grid__navigation__link__dropdown">
                                        <Link to="/collections"> Sản phẩm &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </Link>
                                        {/* menu level 2 */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            {listCategoryRec(0)}
                                        </ul>
                                        
                                    </li>
                                    <li  className="header-grid__navigation__link__dropdown">
                                        <a href='/collections'> Nam &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        {/* menu level 2  */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            {listCategoryRec(1)}
                                        </ul>
                                    </li>
                                    <li  className="header-grid__navigation__link__dropdown">
                                        <a  href='/collections'> Nữ &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        {/* menu level 2 */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            {listCategoryRec(-1)}
                                        </ul>
                                    </li>
                                    <li><a href='/#'>Sale Off</a></li>
                                    <li><Link to='/store-location'>Hệ thống cửa hàng</Link></li>
                                    <li>
                                        <Link to="/orders">Kiểm tra đơn hàng</Link>                                  </li>
                                </ul>
                            </div>
                            <div className="header-grid__navigation__search">
                                <Link to="/search">Tìm kiếm</Link>
                                {/* form search */}
                                
                            </div>
                            
                            {/* block account */}
                            <div className="header-grid__navigation__account">
                                {
                                    liveAccountRec.user_name===''?
                                    <Link to="/account/login">Tài Khoản</Link>:
                                    <>
                                        <span>Chào,{liveAccountRec.user_name}</span>
                                        &nbsp;
                                        <span 
                                            className="fa fa-sign-out" 
                                            aria-hidden="true"
                                            onClick={onLogout}
                                        ></span>
                                    </>
                                }
                            </div>
                            {/* block cart */}
                            <div className="header-grid__navigation__cart">
                                <Link to='/cart'>Giỏ hàng{quantityRec===0?'':'('+quantityRec+')'}</Link>
                                
                            </div>
                        </nav>
                        

                        <div className="header-grid__navigation__res">
                            <label>
                                <span className="fa fa-shopping-cart" aria-hidden="true"></span>&nbsp;
                                {quantityRec===0?'':'('+quantityRec+')'}
                            </label>
                            <label
                                onClick={onToggleVerticalMenu}
                            >
                                <span 
                                    className="fa fa-bars" 
                                    aria-hidden="true"
                                ></span>&nbsp;Menu
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <SupportContainer isActiveScroll={isActiveHeader} />
            <VerticalMenu
                showVerticalMenu={showVerticalMenu}
                onCloseMenu={onToggleVerticalMenu}
                quantityRec={quantityRec}
                liveAccountRec={liveAccountRec}
                onLogoutAccount={onLogout}
                listCategoryRec={listCategoryRec}
            />
        </>
    );
}
export default Header;