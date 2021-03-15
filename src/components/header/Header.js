import { useEffect, useState } from 'react';
import './Header.scss';
import logo from './logo-dincox.png';
import SupportContainer from '../../containers/SupportContainer';
import { Link } from 'react-router-dom';


function Header(props) {
    // declare state component
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [isActiveHeader, setIsActiveHeader] = useState(false);
    
    //get props
    var { quantityRec,listCategoryRec,liveAccountRec,clearAccountRec } = props;

    

    // excute when user click button search
    var onToggleSearch = () => {
        setIsActiveSearch(!isActiveSearch);
    }

    // set state when user scroll page
    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                if(window.scrollY>40){
                    setIsActiveHeader(true);
                }else{
                    setIsActiveHeader(false);
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
                                    <li><a href='/#'>Kiểm tra đơn hàng</a></li>
                                </ul>
                            </div>
                            <div className="header-grid__navigation__search">
                                <a href='/#' onClick={onToggleSearch}>Tìm kiếm</a>
                                {/* form search */}
                                <div className={
                                    isActiveSearch ? 
                                    "header-grid__navigation__search__form-search" : 
                                    "header-grid__navigation__search__form-close"
                                }>
                                    <form action="" method="">
                                        <input type="text" placeholder="Tìm kiếm ..." />
                                        <button type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </form>
                                </div>
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
                                            onClick={clearAccountRec}
                                        ></span>
                                    </>
                                }
                            </div>
                            {/* block cart */}
                            <div className="header-grid__navigation__cart">
                                <Link to='/cart'>Giỏ hàng{quantityRec===0?'':'('+quantityRec+')'}</Link>
                                
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <SupportContainer isActiveScroll={isActiveHeader} />
        </>
    );
}
export default Header;