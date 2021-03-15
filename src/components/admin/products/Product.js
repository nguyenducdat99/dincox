// import style library, components
import './Product.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import TaskControl from './taskcontrol/TaskControl';

// function code here
function Categories(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var { isDisplayFormRec } = props;
    

    // toggle form add/edit
    var onToggleForm = () => {
        props.onClearItemEditRec(
            {
                id_category: '',
                category_name: '',
                created_at: '',
                edited_at: '',
                status: 0
            }
        )
        let { itemEditRec } = props;
        if (itemEditRec&&itemEditRec.id_category === ''){
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
            <div className='main'>
                <div className="wrapper">
                    <div className="main__title">
                        <h1>Quản lý Danh Mục</h1>
                    </div>
                    <div className="main__manager">
                        <div className={isDisplayFormRec?"main__manager__grid":"main__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?"main__manager__add-update":"main__manager__add-update--hidden"}>
                                {
                                    props.taskFormRec()
                                }
                            </div>
                            <div className="main__manager__other-action">
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


export default Categories;