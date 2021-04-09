// import style library, component
import { useEffect, useState } from 'react';
import './TaskForm.scss';


// function code here
function TaskForm(props) {
    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_size: '',
            size_name: '',
            created_at: null,
            edited_at: null,
            status: 0
        }
    )
    useEffect(
        () => {
            if (props.itemEditRec.id_size!=='') {
                setObjectTask(props.itemEditRec);
            }else {
                onClear();
            }
            // eslint-disable-next-line 
        }, [props.itemEditRec]
    )

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        props.onSaveItemRec(objectTask);
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
                id_size: '',
                size_name: '',
                created_at: null,
                edited_at: null,
                status: 0
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        props.onClearItemEditRec(
            {
                id_size: '',
                size_name: '',
                created_at: null,
                edited_at: null,
                status: 0
            }
        )
        props.onCloseFormRec();
    }

    

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{props.itemEditRec.id_size!==''?'Sửa Kích Thứớc':'Thêm Kích Thước'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Kích thước:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="size_name"
                                value={objectTask.size_name}
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