// import style library, components
import {connect} from 'react-redux';
import ProductCollection from '../components/product/productcollection/ProductCollection';

// code function here
function ProductCollectionContainer(props){
    // get props
    var { images } = props;

    
    return(
        <ProductCollection 
            imagesRec={images}
        />
    );
}

const mapStateToProps = (state) => {
    return {

        images: state.listImages
    }
};

export default connect(mapStateToProps,null)(ProductCollectionContainer)