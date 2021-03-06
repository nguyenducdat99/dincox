// import style library, component
import { useEffect, useState } from 'react';
// import TaskSort from '../taskcontrol/tasksort/TaskSort';
import './TaskForm.scss';
import * as Actions from '../../../../actions/Actions';
import { connect } from 'react-redux';

// function code here
function TaskForm(props) {
    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_category: '',
            id_account: 10,
            category_name: "",
            created_at: null,
            edited_at: null,
            status: 1
        }
    )

    useEffect(
        () => {
            if (props.itemEdit&&props.itemEdit!==null) {
                setObjectTask(props.itemEdit);
            }else {
                onClear();
            }
            // eslint-disable-next-line
        }, [props.itemEdit]
    )

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        props.onAddCategory(objectTask);
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
                id_account: 10,
                category_name: "",
                created_at: null,
                edited_at: null,
                status: 1
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        props.onCloseForm();
    }

    

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{props.itemEdit&&props.itemEdit!==null?'Sửa Thể Loại':'Thêm Thể Loại'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Tên Thể Loại:</p>
                            {                              
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="category_name"
                                value={objectTask.category_name}
                                required
                                />
                            }
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
                                <option value={false}>Ẩn</option>
                                <option value={true}>Kích hoạt</option>
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

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCategory: task => {
            dispatch(Actions.addCategory(task));
        }, 
        onCloseForm: () =>{
            dispatch(Actions.closeForm());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);