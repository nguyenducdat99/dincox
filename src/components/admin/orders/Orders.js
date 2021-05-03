// import style library, components
import './Orders.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// function code here
function Orders(props) {
    // get props
    const { 
        taskListRec,
        taskControlUI
     } = props;

    return (
        <>
            <SmallBanner title="Quản lý"/>
            <div className='orders'>
                <div className="wrapper">
                    <div className="orders__title">
                        <h1>Quản lý kích cỡ</h1>
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