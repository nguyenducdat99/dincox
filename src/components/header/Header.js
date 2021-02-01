import { useEffect, useState } from 'react';
import './Header.scss';
import logo from './logo-dincox.png';
import Support from '../support/Support';

function Header() {
    // declare state component
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [isActiveHeader, setIsActiveHeader] = useState(false);
    
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
                                <img src={logo} alt=""/>
                            </h1>
                        </div>
                        <nav className="header-grid__navigation">
                            {/* navigation link  */}
                            <div className="header-grid__navigation__link">
                                <ul>
                                    <li className="header-grid__navigation__link__dropdown">
                                        <a> Sản phẩm &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        {/* menu level 2 */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a className="last-child-a">Item 2</a></li>
                                        </ul>
                                        
                                    </li>
                                    <li  className="header-grid__navigation__link__dropdown">
                                        <a> Nam &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        {/* menu level 2  */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a className="last-child-a">Item 2</a></li>
                                        </ul>
                                    </li>
                                    <li  className="header-grid__navigation__link__dropdown">
                                        <a> Nữ &nbsp;
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>
                                        {/* menu level 2 */}
                                        <ul className="header-grid__navigation__link__dropdown--level-2">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a>Item 2</a></li>
                                            <li><a className="last-child-a">Item 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Sale Off</a></li>
                                    <li><a>Hệ thống cửa hàng</a></li>
                                    <li><a>Kiểm tra đơn hàng</a></li>
                                </ul>
                            </div>
                            <div className="header-grid__navigation__search">
                                <a onClick={onToggleSearch}>Tìm kiếm</a>
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
                                <a>Tài khoản</a>
                            </div>
                            {/* block cart */}
                            <div className="header-grid__navigation__cart">
                                <a>Giỏ hàng</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Support isActiveScroll={isActiveHeader} />
        </>
    );
}
export default Header;