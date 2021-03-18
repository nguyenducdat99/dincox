// import style library, components
import {connect} from 'react-redux';
import Checkout from '../components/checkout/Checkout';

// code function here
function CheckoutContainer(props){
 
    // get props
    var { liveAccount,isActiveScroll } = props;

    return(
        <Checkout 

        />
    );
}


const mapStateToProps = state => {
    return {
        liveAccount: state.loginedAccount
    }
};
const mapDispatchToProps = (dispatch,props) => {
    return {
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutContainer)