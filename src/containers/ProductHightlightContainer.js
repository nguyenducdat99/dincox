// import style library, components
import {connect} from 'react-redux';
import ProductHightlight from '../components/product/producthightlight/ProductHightlight';
import SingleProduct from '../components/product/aproduct/Aproduct';


// code function here
function ProductHightlightContainer(props){
    // declare state
    var { listProductHightLight } = props;
    var listIndex = listProductHightLight.map((item,index)=>{
        if(item.is_active&&!item.is_sale){
            return(
                <SingleProduct key={index} data={item}/>
            )
        }
        return '';
    })

    return(
        <ProductHightlight listProduct={listIndex} />
    );
}

const mapStateToPropsProductHightlight = (state) => {
    return {
        listProductHightLight: state.ListProduct
    }
};
export default connect(mapStateToPropsProductHightlight,null)(ProductHightlightContainer)