// import library style
import './SmallArticle.scss';
import demo from './demo.jpg';

// code for function here
function SmallArticle() {
    return(
        <div className="small-article">
            <div className="small-article__image">
                <img src={demo} alt="demo" /> 
            </div>
            <div className="small-article__title">
                <p>Title 1</p>
            </div>
            <div className="small-article__info">
                <div className="small-article__info__date">
                    <p>
                        <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                        08/02/2021
                    </p>
                </div>
                <div className="small-article__info__author">
                    <p>
                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                        Admin
                    </p>
                </div>
                <div className="small-article__info__comment">
                        <p>
                            <i className="fa fa-commenting" aria-hidden="true"></i>
                        </p>
                </div>
            </div>
            <div className="small-article__desc">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}
export default SmallArticle;