// import style library, components
import {connect} from 'react-redux';
import Header from '../components/header/Header';


// code function here
function CartContainer(props){
    // declare state
    var { cart } = props;
    var quantity = cart.length===0?0:cart.length;


    return(
        <Header cart={quantity}/>
    );
}


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};
export default connect(mapStateToProps,null)(CartContainer)