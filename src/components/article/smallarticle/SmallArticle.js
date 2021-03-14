// import library style
import './SmallArticle.scss';
import demo from './demo.jpg';
import { Link } from 'react-router-dom';

// code for function here
function SmallArticle(props) {
    // get props
    const { data } = props;

    // get value of data
    var {id_new, author, title, created_at, contents} = data;
    
    // return ui
    return(
        <div className="small-article">
            <Link to={"/articles/"+id_new}>
                <div className="small-article__image">
                    <img src={demo} alt="demo" /> 
                </div>
                <div className="small-article__title">
                    <p>{title}</p>
                </div>
            </Link>
            <div className="small-article__info">
                <div className="small-article__info__date">
                    <p>
                        <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                        {created_at}
                    </p>
                </div>
                <div className="small-article__info__author">
                    <p>
                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                        {author}
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
                    {contents}
                </p>
            </div>
        </div>
    );
}
export default SmallArticle;