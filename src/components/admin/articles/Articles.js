// import style library, components
import './Articles.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// function code here
function Articles(props) {
    // get props
    const { 
        isDisplayFormRec ,
        onClearItemEditRec,
        itemEditRec,
        onToggleFormRec,
        taskListRec,
        taskFormRec,
        taskControlUI,
        imageFormRec,
        showImageRec
    } = props;
    

    // toggle form add/edit
    const onToggleForm = () => {
        onClearItemEditRec(
            {
                id_new: '',
                author: '',
                title: '',
                contents: '',
                reference_links: '',
                status: 0
            }
        )
        if (itemEditRec&&itemEditRec.id_new === ''){
            onToggleFormRec();
        }
    };

    // return ui
    return (
        <>
            <SmallBanner title="Quản lý"/>
            {
                showImageRec?<div className="background-blur">
                {
                       imageFormRec()
                }
                 </div>:''
            }
            <div className='articles'>
                <div className="wrapper">
                    <div className="articles__title">
                        <h1>Quản lý bài viết</h1>
                    </div>
                    <div className="articles__manager">
                        <div className={isDisplayFormRec?"articles__manager__grid":"articles__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?"articles__manager__add-update":"articles__manager__add-update--hidden"}>
                                {
                                    taskFormRec()
                                }
                            </div>
                            <div className="articles__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm bài viết
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


export default Articles;