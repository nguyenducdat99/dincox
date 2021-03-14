// import style library, components
import { useEffect } from 'react';
import ArticleDetail from '../components/article/articledetail/ArticleDetail';
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';

// code function here
function MyContaner(props){
    // load data
    useEffect(
        () => {
            props.onFetchApi();
            // eslint-disable-next-line
        },[]
    )
    
    // get props 
    const { news } = props

    return(
        <ArticleDetail
            newsRec={news}
        />
    );
}

const mapStateToProps = state => {
    return {
        news: state.listArticle
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi: () => {
            dispatch(Actions.fetchArticleRequest());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(MyContaner)