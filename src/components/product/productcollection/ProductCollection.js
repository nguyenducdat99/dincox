// import style library
import './ProductCollection.scss';
import SmallCollectionImg from './product__collection__list__single.jpg';
import BigCollectionImg from './product__collection__big.jpg';

// code function here
function ProductCollection(){
    return(
        <div className="product__collection">
                    <h2>Kho ảnh & video</h2>
                    <div className="product__collection-grid">
                        <div className="product__collection__list-small">
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                            <div className="product__collection__list-small__single">
                                <img src={SmallCollectionImg} alt=""/>
                            </div>
                        </div>
                        <div className="product__collection__big">
                            <img src={BigCollectionImg} alt=""/>
                        </div>
                    </div>
                </div>
               
    );
}
export default ProductCollection;