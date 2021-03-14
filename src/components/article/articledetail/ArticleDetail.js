// import style library
import './ArticleDetail.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useParams } from 'react-router';
import {connect} from 'react-redux';


function embedYoutubeConvert(url) {
    let embeddedUrl = '';
    var res = url.split("=");
    
    embeddedUrl = "https://www.youtube.com/embed/"+res[1];
    return embeddedUrl; 
}


// code function here
function ArticleDetail(props){
    // load data for article detail
    const {id} = useParams();// get id from url
    var { newsRec } = props;// get list new from store
    
    // get recent article
    var recentArticle;
    newsRec.forEach((item,index) => {
        if((item.id_new+'')===id){
            recentArticle = item;
        }
    });
    
    // get value from recent article
    var { author, title, created_at, contents, reference_links } = recentArticle;

    // convert youtube link into embed link
    var embedYoutube = embedYoutubeConvert(reference_links);


    return(
        <>    
            <SmallBanner title="Tin tức" title2={title}/>
            <div className="article-detail">
                <div className="wrapper">
                    <div className="article-detail__grid">
                        <div className="article-detail__title">
                            <h1>{title}</h1>
                        </div>
                        <div className="article-detail__info">
                            <div className="article-detail__info__date">
                                <p>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                    {created_at}
                                </p>
                            </div>
                            <div className="article-detail__info__author">
                                <p>
                                    <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                    {author}
                                </p>
                            </div>
                            <div className="article-detail__info__comment">
                                    <p>
                                        <i className="fa fa-commenting" aria-hidden="true"></i>
                                    </p>
                            </div>
                        </div>
                        <div className="article-detail__contents">
                            <p>{contents}</p>
                            <iframe 
                                width="560" height="500" 
                                src={embedYoutube} 
                                frameBorder="1" 
                                title={title}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToPropsArticleDetail = (state) => {
    return {
        listNew: state.ListNew
    }
}
export default connect(mapStateToPropsArticleDetail,null)(ArticleDetail);