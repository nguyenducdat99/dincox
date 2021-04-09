// import style library, components
import './Sizes.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import TaskControl from './taskcontrol/TaskControl';

// function code here
function Sizes(props) {
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
            <div className='sizes'>
                <div className="wrapper">
                    <div className="sizes__title">
                        <h1>Quản lý kích cỡ</h1>
                    </div>
                    <div className="sizes__manager">
                        <div className={isDisplayFormRec?
                            "sizes__manager__grid":
                            "sizes__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?
                                "sizes__manager__add-update":
                                "sizes__manager__add-update--hidden"}>
                                {
                                    props.taskFormRec()
                                }
                            </div>
                            <div className="sizes__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Kích Cỡ
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


export default Sizes;