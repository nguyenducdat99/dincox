// import style library
import './ProductCollection.scss';

function makeRandomIndex(max) {
    return Math.floor((Math.random() * max))
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
                            src={'http://localhost:8080'+
                            (imagesRec[makeRandomIndex(imagesRec.length)].path)} 
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
                                src={'http://localhost:8080'+
                                (imagesRec[makeRandomIndex(imagesRec.length)].path)} 
                                alt="dincox collection" 
                            />
                        </div>
                    </div>
                </div>
               
    );
}
export default ProductCollection;