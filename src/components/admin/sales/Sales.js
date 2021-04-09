// import style library, components
import './Sales.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import TaskControl from './taskcontrol/TaskControl';

// function code here
function Sales(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var { isDisplayFormRec } = props;
    

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
        let { itemEditRec } = props;
        if (itemEditRec&&itemEditRec.id_size === ''){
            props.onToggleFormRec();
        }
    };

    // handle search
    var onSearch = text => {
        // setKeyWord(text);
    }

    // handle sort
    var onSort = type => {
        // setSortType(type);
    }


    return (
        <>
            <SmallBanner title="Quản lý"/>
            <div className='sales'>
                <div className="wrapper">
                    <div className="sales__title">
                        <h1>Quản lý kích cỡ</h1>
                    </div>
                    <div className="sales__manager">
                        <div className={isDisplayFormRec?
                            "sales__manager__grid":
                            "sales__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?
                                "sales__manager__add-update":
                                "sales__manager__add-update--hidden"}>
                                {
                                    props.taskFormRec()
                                }
                            </div>
                            <div className="sales__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Danh Mục
                                </button>
                                <TaskControl 
                                    onSearch={onSearch}
                                    onSort={onSort}
                                />
                                {
                                    props.taskListRec()
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