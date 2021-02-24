// import style library
import './ArticleDetail.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import { useParams } from 'react-router';
import {connect} from 'react-redux';

// code function here
function ArticleDetail(props){
    // load data for article detail
    const {id} = useParams();// get id from url
    var {listNew} = props;// get list new from store
    var recentArticle;
    listNew.forEach((item,index) => {
        if((item.id_new+'')===id){
            recentArticle = item;
        }
    });
    var {id_account,title, create_at,contents} = recentArticle;//get data from recent article

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
                                    {create_at}
                                </p>
                            </div>
                            <div className="article-detail__info__author">
                                <p>
                                    <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                    {id_account}
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
                            <iframe width="560" height="315" src="" 
                            frameBorder="1" 
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" >

                            </iframe>
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