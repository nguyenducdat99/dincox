// import style library, components
import './Orders.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';


// function code here
function Orders(props) {
    // get props
    const { 
        taskListRec,
        taskControlUI,
        showDetail,
        orderDetailUI
     } = props;

    return (
        <>
            <SmallBanner title="Quản lý"/>
            {
                showDetail?orderDetailUI():''
            }
            <div className='orders'>
                <div className="wrapper">
                    <div className="orders__title">
                        <h1>Quản lý đơn hàng</h1>
                    </div>
                    <div className="orders__manager">
                        <div className="orders__manager__grid">
                            <div className="orders__manager__other-action">
                                {
                                    taskControlUI()
                                }
                                {
                                    taskListRec()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Orders;