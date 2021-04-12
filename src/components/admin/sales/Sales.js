// import style library, components
import './Sales.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// function code here
function Sales(props) {
    // get props 
    const { 
        isDisplayFormRec,
        itemEditRec,
        onToggleFormRec,
        taskListRec,
        taskFormRec,
        taskControl
    } = props;
    

    // toggle form add/edit
    var onToggleForm = () => {
        props.onClearItemEditRec(
            {
                id_size: '',
                size_name: '',
                created_at: null,
                edited_at: null,
                status: 0
            }
        )
        if (itemEditRec&&itemEditRec.id_size === ''){
            onToggleFormRec();
        }
    };

    return (
        <>
            <SmallBanner title="Quản lý khuyến mại"/>
            <div className='sales'>
                <div className="wrapper">
                    <div className="sales__title">
                        <h1>Quản lý khuyến mại</h1>
                    </div>
                    <div className="sales__manager">
                        <div className={isDisplayFormRec?
                            "sales__manager__grid":
                            "sales__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?
                                "sales__manager__add-update":
                                "sales__manager__add-update--hidden"}>
                                {
                                    taskFormRec()
                                }
                            </div>
                            <div className="sales__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Khuyến mãi
                                </button>
                                {
                                    taskControl()
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





export default Sales;