// import style library, component
import { useEffect, useState } from 'react';
import './TaskForm.scss';


// function code here
function TaskForm(props) {
    // get props
    const {
        itemEditRec,
        onCloseFormRec,
        onClearItemEditRec,
        onSaveItemRec
    } = props;

    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_category: '',
            category_name: '',
            created_at: '',
            edited_at: '',
            status: 0
        }
    )
    useEffect(
        () => {
            if (itemEditRec.id_category!=='') {
                setObjectTask(itemEditRec);
            }else {
                onClear();
            }
            // eslint-disable-next-line 
        }, [itemEditRec]
    )

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        onSaveItemRec(objectTask);
        onClear();
        onExitForm();
    }

    // handle when value change
    var onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        
        setObjectTask(
            {
                ...objectTask, 
                [name]: value
            }
        )
    }

    // clear value form
    function onClear() {
        setObjectTask(
            {
                ...objectTask,
                id_category: '',
                category_name: '',
                created_at: '',
                edited_at: '',
                status: 0
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        onClearItemEditRec(
            {
                id_category: '',
                category_name: '',
                created_at: '',
                edited_at: '',
                status: 0
            }
        )
        onCloseFormRec();
    }

    

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{itemEditRec.id_category!==''?'Sửa Danh mục':'Thêm Danh Mục'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Danh Mục:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="category_name"
                                value={objectTask.category_name}
                                required
                                />
                        </label>
                    </div>
                    
                    <div className="form-group">
                        <label>
                            <p>Trạng Thái:</p>
                            <select 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.status}
                                name="status"
                                required
                            >
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group form-group--center">
                        <button type='submit' className="btn btn-warning">
                            <span className="fa fa-plus"></span>
                            Lưu Lại
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={onClear}>
                            <span className="fa fa-close"></span>
                            Hủy bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskForm;