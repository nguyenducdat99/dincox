// import style library, components
import {connect} from 'react-redux';
import OrderDetail from '../components/order/orderdetail/OrderDetail';

// code function here
function OrderDetailContainer(props){
    // declare state
    const {onCloseFormRec, presentOrderRec, orderDetails} = props;

    console.log(orderDetails);

    return(
        <OrderDetail
            onCloseFormRec={onCloseFormRec}
            presentOrderRec={presentOrderRec}
            ordersDetailRec={ordersDetail}
        />
    );
}


const mapStateToProps = state => {
    return {
        orderDetails: state.orderDetail
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(OrderDetailContainer)