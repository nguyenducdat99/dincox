//import style library
import './Aproduct.scss';

function Aproduct() {
    return(
        <div className="aproduct">
            <div className="aproduct__image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&f=1&nofb=1" alt="demo" />
                <div className="aproduct__sale">
                    <p>-50%</p>
                </div>
                <div className="aproduct__image__select-wrapper">
                    <div className="aproduct__image__select">
                        <button type="button" className="aproduct__image__select__search-plus">
                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="aproduct__image__select__check-out">
                            <p>Mua ngay</p>
                        </button>
                        <button type="button" className="aproduct__image__select__cart-plus">
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="aproduct__contents">
                <div className="aproduct__contents__name">
                    <p>C18 BLK/WHT</p>
                </div>
                <div className="aproduct-contents__price">
                    <p>100000<u>đ</u></p>
                    <p><del>150000<u>đ</u></del></p>
                </div>
            </div>
        </div>
    );
}
export default Aproduct;