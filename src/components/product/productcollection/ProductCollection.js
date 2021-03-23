// import style library
import './ProductCollection.scss';
import * as Actions from '../../../constands/ActionTypes';

function makeRandomIndex(max) {
    return Math.floor((Math.random() * max))
}

function makeRandomPath(items) {
    let result = '';

    
    if (items.length === 0) {
        return result;
    }else{
        result = result + Actions.DOMAINT_SERVER + (items[makeRandomIndex(items.length)].path);
    }

    return result;
}

// code function here
function ProductCollection(props){
    // get props 
    const {imagesRec} = props;

    // return list small image
    var listItem = [0,1,2,3,4,5].map(
        (element, index) => {
            return <div key={index} className="product__collection__list-small__single">
                        <img 
                            src={makeRandomPath(imagesRec)} 
                            alt="dincox collection" 
                        />
                    </div>
        }
    )

    return(
        <div className="product__collection">
                    <h2>Kho ảnh & video</h2>
                    <div className="product__collection-grid">
                        <div className="product__collection__list-small">
                            {
                                listItem
                            }
                        </div>
                        <div className="product__collection__big">
                            <img 
                                src={makeRandomPath(imagesRec)} 
                                alt="dincox collection" 
                            />
                        </div>
                    </div>
                </div>
               
    );
}
export default ProductCollection;