// import style library, components
import './Product.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import TaskControl from './taskcontrol/TaskControl';

// function code here
function Categories(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var {isDisplayFormRec, showQuantityRec, quantityFormRec, showImageRec, imageFormRec} = props;
    

    // toggle form add/edit
    var onToggleForm = () => {
        props.onClearItemEditRec(
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
        let { itemEditRec } = props;
        if (itemEditRec&&itemEditRec.id_product === ''){
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
                                    isDisplayFormRec?props.taskFormRec():''
                                }

                            </div>
                            <div className="main__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Sản Phẩm
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