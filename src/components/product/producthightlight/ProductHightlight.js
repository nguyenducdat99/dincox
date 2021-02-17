// import style library, components
import SingleProduct from '../aproduct/Aproduct';
import "./ProductHightlight.scss";


// code function here
function ProductHightlight(){
    // declare state
    const listIndex = [0,1,2,3,4,5,6,7,8];

    // excute when click butotn;
    function removeStyle() {
        let data=document.getElementsByName('action');
        for(let i=0;i<data.length;i++){
            data[i].style.backgroundColor = 'lightgray';
            data[i].style.color = 'black';
        }
    }
    var onHightLight = (event) =>{
        removeStyle();
        event.target.style.backgroundColor = "gray";
        event.target.style.color = "white";
        
    }

    return(
        <div className="product__hightlights">
            <h2>SẢN PHẨM NỔI BẬT</h2>
            <div className="product__hightlights__action">
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>&nbsp;
                <button type="button" onClick={onHightLight} name="action">Giày Nam nổi bật</button>
            </div>
            <div className="product__hightlights__list-product">
                {
                    listIndex.map((item,index)=>
                        <SingleProduct key={index}/>
                    )
                }
            </div>
            
        </div>         
    );
}
export default ProductHightlight