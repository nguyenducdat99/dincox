// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import { useEffect } from 'react';
import Article from '../components/article/Article';
import SingleArticle from '../components/article/smallarticle/SmallArticle';

// code function here
function ArticleUIContainer(props){
    // load data
    useEffect(
        () => {
            props.onFetchApi();
            // eslint-disable-next-line
        },[]
    )
    
    // get props 
    const { news, images } = props
    // return list article
    var listitem = news.map((item, index)=>{
        if (item.status) {
            return (
                <SingleArticle 
                    key={index} 
                    data={item}
                    imagesRec={images}
                />
            )
        }
        return '';
    })

    

    return(
        <Article
            listArticle={listitem}
        />
    );
}

const mapStateToProps = state => {
    return {
        news: state.listArticle,
        images: state.listImages
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi: () => {
            dispatch(Actions.fetchArticleRequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ArticleUIContainer)