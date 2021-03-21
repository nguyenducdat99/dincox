// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Order from '../components/order/Order';

// code function here
function OrderContainer(props){
    // declare state
    const {fetchOrder, orders, fetchOrderDetail, orderDetails, 
        products, sizes} = props;

    return(
        <Order
            fetchOrderRec={fetchOrder}
            fetchOrderDetailRec={fetchOrderDetail}
            ordersRec={orders}
            orderDetailsRec={orderDetails}
            productsRec={products}
            sizesRec={sizes}
        />
    );
}


const mapStateToProps = state => {
    return {
        orders: state.order,
        orderDetails: state.orderDetail,
        products: state.ListProduct,
        sizes: state.listSize
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchOrder: id => {
            dispatch(Actions.fetchOrderRequest(id));
        },
        fetchOrderDetail: id => {
            dispatch(Actions.fetchOrderDetailRequest(id));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(OrderContainer)