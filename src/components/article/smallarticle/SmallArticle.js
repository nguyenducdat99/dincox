// import library style
import './SmallArticle.scss';
import { Link } from 'react-router-dom';
import * as constands from '../../../constands/ActionTypes';

function findImages(items,id) {
    let result = [];

    items.sort(function(a, b){return b.id_image - a.id_image})

    items.forEach(element => {
        if (element.id_new*1 === id*1) result.push(element.path);
    });

    return result;
}

// code for function here
function SmallArticle(props) {
    // get props
    const { data, imagesRec } = props;

    // get value of data
    var {id_new, author, title, created_at, contents} = data;

        
    // get images for item
    var path = findImages(imagesRec,id_new);
    
    // conver path
    path = '' + constands.DOMAINT_SERVER + path[0];

    
    // return ui
    return(
        <div className="small-article">
            <Link to={"/articles/"+id_new}>
                <div className="small-article__image">
                    <img src={path} alt="dincox news" /> 
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