// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Order from '../components/order/Order';

// code function here
function OrderContainer(props){
    // declare state
    const {fetchOrder, orders} = props;

     return(
        <Order
            fetchOrderRec={fetchOrder}
            ordersRec={orders}
        />
    );
}


const mapStateToProps = state => {
    return {
        orders: state.order
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchOrder: id => {
            dispatch(Actions.fetchOrderRequest(id));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(OrderContainer)