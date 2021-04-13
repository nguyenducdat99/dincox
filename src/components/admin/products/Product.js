// import style library, components
import './Product.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';

// function code here
function Categories(props) {
    const {
        isDisplayFormRec, 
        showQuantityRec, 
        quantityFormRec, 
        showImageRec, 
        imageFormRec,
        taskControlUI,
        taskFormRec,
        taskListRec,
        onToggleFormRec,
        itemEditRec,
        onClearItemEditRec
    } = props;
    

    // toggle form add/edit
    const onToggleForm = () => {
        onClearItemEditRec(
            {
                id_product: '',
                id_category: '',
                product_name: '',
                is_sale: 0,
                description: '',
                price: 0,
                status: 0,
            }
        )
        if (itemEditRec&&itemEditRec.id_product === ''){
            onToggleFormRec();
        }
    };


    return (
        <>
            <SmallBanner title="Quản lý"/>
            {
                showQuantityRec?
                <div className="background-blur">
                {
                    quantityFormRec()
                }
                </div>:''
            }
            {
                showImageRec?<div className="background-blur">
                {
                       imageFormRec()
                }
                 </div>:''
            }
            <div className='main'>
                <div className="wrapper">
                    <div className="main__title">
                        <h1>Quản lý sản phẩm</h1>
                    </div>
                    <div className="main__manager">
                        <div className={isDisplayFormRec?"main__manager__grid":"main__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?"main__manager__add-update":"main__manager__add-update--hidden"}>
                                {
                                    isDisplayFormRec?taskFormRec():''
                                }

                            </div>
                            <div className="main__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Sản Phẩm
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