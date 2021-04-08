// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import Order from '../components/order/Order';
import PropTypes from 'prop-types';

// code function here
function OrderContainer(props){
    // declare state
    const {
        fetchOrder, 
        orders, 
        fetchOrderDetail, 
        orderDetails, 
        products, 
        sizes,
        resetOrder

    } = props;

    return(
        <Order
            fetchOrderRec={fetchOrder}
            fetchOrderDetailRec={fetchOrderDetail}
            ordersRec={orders}
            orderDetailsRec={orderDetails}
            productsRec={products}
            sizesRec={sizes}
            resetOrder={resetOrder}
        />
    );
}

OrderContainer.propTypes = {
    fetchOrder: PropTypes.func,
    orders: PropTypes.array,
    fetchOrderDetail: PropTypes.func,
    orderDetail: PropTypes.object,
    products: PropTypes.array,
    sizes: PropTypes.array,
    resetOrder: PropTypes.func
};

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
        },
        resetOrder: () => {
            dispatch(Actions.resetOrder());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(OrderContainer)