// import style library, components
import './Categories.scss';
import SmallBanner from '../../fixcontents/smallbanner/SmallBanner';
import {  useEffect } from 'react';
import TaskControl from './taskcontrol/TaskControl';

// function code here
function Categories(props) {
    // declare state component
    // const [keyWord, setKeyWord] = useState('');
    // const [sortType, setSortType] = useState('0');
    var { isDisplayFormRec } = props;
    
    // close task form in first loading
    useEffect(
        () => {
            props.onCloseFormRec();
            // eslint-disable-next-line
        },[]
    )

    // toggle form add/edit
    var onToggleForm = () => {
        props.onSelectItemEditRec(
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
            <div className='categories'>
                <div className="wrapper">
                    <div className="categories__title">
                        <h1>Quản lý Danh Mục</h1>
                    </div>
                    <div className="categories__manager">
                        <div className={isDisplayFormRec?"categories__manager__grid":"categories__manager__grid--hidden"}>
                            <div className={isDisplayFormRec?"categories__manager__add-update":"categories__manager__add-update--hidden"}>
                                {
                                    props.taskFormRec()
                                }
                            </div>
                            <div className="categories__manager__other-action">
                                <button type="button" className="btn-primary" onClick={onToggleForm}>
                                    <span className="fa fa-plus"></span>Thêm Danh Mục
                                </button>
                                <TaskControl 
                                    onSearch={onSearch}
                                    onSort={onSort}
                                />
                                {/* <TaskList/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Categories;