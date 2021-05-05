// import style library, components
import {connect} from 'react-redux';
import * as Actions from '../actions/Actions';
import * as Types from '../constants/ActionTypes';
import PropTypes from 'prop-types';
import Orders from '../components/admin/orders/Orders';
import TaskList from '../components/admin/orders/tasklist/TaskList';
import TaskItem from '../components/admin/orders/tasklist/TaskItem';
import TaskControl from '../components/admin/orders/taskcontrol/TaskControl';
import OrderDetail from '../components/admin/orders/orderdetail/OrderDetail';
import ComponentToPrint from '../components/admin/orders/orderdetail/OrderDetailPrint';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

// code function here
function OrdersManagerContainer(props){
    // ------------------handle for print------------------
    // get ref
    const componentRef = useRef();
    const handlePrint = useReactToPrint(
        {
            content: () => componentRef.current,
        }
    );
    // ----------------------------------------------------



    // get props
    const {
        onFetchApi,
        onSelectItemEdit,
        onUpdateStatus,
        items,
        products,
        sizes,
        orderDetails,
        fetchOrderDetail
    } = props;

    // declare state
    const [keyword, setKeyword] = useState('');
    const [sortType, setSortType] = useState('');
    const [showDetail, setShowDetail] = useState(false);
    const [presentOrder,setPresentOrder] = useState({
        id_order: 0,
        id_account: 0,
        create_at: "",
        email: "",
        number_phone: "0",
        receiver: "",
        sent_to: "",
        transport_fee: 0,
        status: 0
    });


    // get order detail
    useEffect(
        () => {
            if (presentOrder.id_order!==0) {
                fetchOrderDetail(presentOrder.id_order);
            }
            // eslint-disable-next-line
        },[presentOrder.id_order]
    )

    // handle open order detail
    const openDetail = (item,option) => {
        if (option) return setPresentOrder(item);

        setPresentOrder(item);
        setShowDetail(true);
    }

    // handle close order detail
    const closeDetail = () => {
        setShowDetail(false);
    }

    
    // load data
    useEffect( 
        () => {
            onFetchApi();
            // eslint-disable-next-line
        },[]
    )
   
    // filter items with keyword
    var itemsFilter = (items.length>0)?items.filter(
        element => {
            return  ((element.create_at)?element.create_at.toLowerCase().includes(keyword.toLowerCase()):false)||
                    ((element.email)?element.email.toLowerCase().includes(keyword.toLowerCase()):false)||
                    ((element.sent_to)?element.sent_to.toLowerCase().includes(keyword.toLowerCase()):false)||
                    ((element.number_phone)?element.number_phone.toLowerCase().includes(keyword.toLowerCase()):false)||
                    ((element.receiver)?element.receiver.toLowerCase().includes(keyword.toLowerCase()):false)||
                    ((element.id_order)?('dincox'+element.id_order).toLowerCase().includes(keyword.toLowerCase()):false)
        } 
    ):items;

    switch (sortType) {
        case Types.NAME_UP:
            itemsFilter.sort(sortNameUp);
            break;
        case Types.NAME_DOWN:
            itemsFilter.sort(sortNameDown);
            break;
        case Types.STATUS_TRUE:
            itemsFilter.sort(sortStatusTrue);
            break;
        case Types.STATUS_FALSE:
            itemsFilter.sort(sortStatusFalse);
            break;
        default:
            
            break;
    }

    
    // return item in task list
    const listIndex = itemsFilter.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                itemRec={item}
                onSelectItemEditRec={onSelectItemEdit}
                onUpdateStatusRec={onUpdateStatus}
                openDetail={openDetail}
                handlePrint={handlePrint}
            />
        )
    });// use for taskList
    const taskList = () => {
        return (
            <TaskList
                listItem={listIndex}
            />
        )
    }

     // return ui task control
     const taskControlUI = () => {
        return (
            <TaskControl 
                onSearch={onSearch}
                onSort={onSort}
            />
        )
    }


    // handle when input keyword
    const onSearch = keyword => {
        setKeyword(keyword);
    }

    // handle when sort
    const onSort = type => {
        switch (type) {
            case Types.NAME_UP:
                setSortType(Types.NAME_UP);
                break;
            case Types.NAME_DOWN:
                setSortType(Types.NAME_DOWN);
                break;
            case Types.STATUS_TRUE:
                setSortType(Types.STATUS_TRUE);
                break;
            case Types.STATUS_FALSE:
                setSortType(Types.STATUS_FALSE);
                break;
            case Types.PRICE_UP:
                setSortType(Types.PRICE_UP);
                break;
            case Types.PRICE_DOWN:
                setSortType(Types.PRICE_DOWN);
                break;
            case Types.SALE_TRUE:
                setSortType(Types.SALE_TRUE);
                break;
            case Types.SALE_FALSE:
                setSortType(Types.SALE_FALSE);
                break;
            case Types.CATEGORY_GROUP:
                setSortType(Types.CATEGORY_GROUP);
                break;
            default:
                
                break;
        }
    }

    // return order detail
    const orderDetailUI = () => {
        return (
            <OrderDetail 
                closeDetail={closeDetail}
                orderDetailsRec={orderDetails}
                productsRec={products}
                sizesRec={sizes}
                presentOrderRec={presentOrder}
            />
        )
    }
    // return order detail
    const orderDetailPrintUI = () => {
        return (
            <ComponentToPrint 
                ref={componentRef}
                orderDetailsRec={orderDetails}
                productsRec={products}
                sizesRec={sizes}
                presentOrderRec={presentOrder}
            />
        )
    }

    // return ui
    return(
        <Orders
            taskListRec={taskList}
            taskControlUI={taskControlUI}
            orderDetailUI={orderDetailUI}
            orderDetailPrintUI={orderDetailPrintUI}
            showDetail={showDetail}
        />
    );
}

OrdersManagerContainer.propTypes = {
    items: PropTypes.array,
    onClearItemEdit: PropTypes.func,
    onToggleForm: PropTypes.func,
    itemEdit: PropTypes.object,
    isDisplayForm: PropTypes.bool,
    onUpdateStatus: PropTypes.func,
    onOpenForm: PropTypes.func,
    onSelectItemEdit: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onSaveItem: PropTypes.func,
    onFetchApi: PropTypes.func,
    onCloseForm: PropTypes.func,
    products: PropTypes.array,
    sizes: PropTypes.array,
    orderDetails: PropTypes.array,
    fetchOrderDetail: PropTypes.func
}

const mapStateToProps = state => {
    return {
        items: state.order,
        isDisplayForm: state.isDisplayForm,
        itemEdit: state.sizeEdit,
        orderDetails: state.orderDetail,
        sizes: state.listSize,
        products: state.ListProduct,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchApi : () => {
            dispatch(Actions.fetchAllOrderRequest());
        },
        onSelectItemEdit: id => {
            dispatch(Actions.selectSizeRequest(id));
        },
        onUpdateStatus: data => {
            dispatch(Actions.updateStatusOrderRequest(data));
        },
        fetchOrderDetail: id => {
            dispatch(Actions.fetchOrderDetailRequest(id));
        },
    }
};

// custom sort 
const sortNameUp = (a,b) => {
    if (a.id_order > b.id_order) return 1;
    if (a.id_order < b.id_order) return -1;
    return 0;
}
const sortNameDown = (a,b) => {
    if (a.id_order > b.id_order) return -1;
    if (a.id_order < b.id_order) return 1;
    return 0;
}
const sortStatusFalse = (a,b) => {
    if (a.receiver > b.receiver) return 1;
    if (a.receiver < b.receiver) return -1;
    return 0;
}
const sortStatusTrue = (a,b) => {
    if (a.receiver > b.receiver) return -1;
    if (a.receiver < b.receiver) return 1;
    return 0;
}

export default connect(mapStateToProps,mapDispatchToProps)(OrdersManagerContainer)