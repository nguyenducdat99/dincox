// import style library, components
import './Categories.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// function code here
function Categories(props) {
    // get props
    const { 
        isDisplayFormRec ,
        onClearItemEditRec,
        itemEditRec,
        onToggleFormRec,
        taskListRec,
        taskFormRec,
        taskControlUI
    } = props;
    

    // toggle form add/edit
    var onToggleForm = () => {
        onClearItemEditRec(
            {
                id_category: '',
                category_name: '',
                created_at: '',
                edited_at: '',
                status: 0
            }
        )
        if (itemEditRec&&itemEditRec.id_category === ''){
            onToggleFormRec();
        }
    };

    return (
        <>
            <SmallBanner title="Quản lý"/>
            <div className='categories'>
                <div className="wrapper">
                    <div className="categories__title">
                        <h1>Quản lý Danh Mục</h1>
                    </div>
                    <div className="categories__manager">
                        <div className={isDisplayFormRec?"categories__manager__grid":"categories__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?"categories__manager__add-update":"categories__manager__add-update--hidden"}>
                                {
                                    taskFormRec()
                                }
                            </div>
                            <div className="categories__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Danh Mục
                                </button>
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


export default Categories;