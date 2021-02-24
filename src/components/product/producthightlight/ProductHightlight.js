// import style library, components
import SingleProduct from '../aproduct/Aproduct';
import "./ProductHightlight.scss";
import {connect} from 'react-redux';


// code function here
function ProductHightlight(props){
    // declare state
    


    // load product list
    var {listProductHightLight} = props;
    var listIndex = listProductHightLight.map((item,index)=>{
        if(item.is_active&&!item.is_sale){
            return(
                <SingleProduct key={index} data={item}/>
            )
        }
    })

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
                    listIndex
                }
            </div>
            
        </div>         
    );
}

const mapStateToPropsProductHightlight = (state) => {
    return {
        listProductHightLight: state.ListProduct
    }
};
export default connect(mapStateToPropsProductHightlight,null)(ProductHightlight)