// import style library, component
import { useEffect, useState } from 'react';
import './TaskForm.scss';

// function code here
function TaskForm(props) {
    // get props
    const {
        itemEdit,
        onSaveItem,
        onCloseForm,
        onClearItemEdit
    } = props;

    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_account: '',
            user_name: '',
            password: '',
            position: '0',
            email: '',
            status: 0
        }
    )
    useEffect(
        () => {
            if (itemEdit.id_account!=='') {
                setObjectTask(itemEdit);
            }else {
                onClear();
            }
            // eslint-disable-next-line 
        }, [itemEdit]
    )

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        onSaveItem(objectTask);
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
                id_account: '',
                user_name: '',
                password: '',
                position: '0',
                email: '',
                status: 0
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        onClearItemEdit(
            {
                id_account: '',
                user_name: '',
                password: '',
                position: '0',
                email: '',
                status: 0
            }
        )
       onCloseForm();
    }

    

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{itemEdit.id_account!==''?'Sửa Tài Khoản':'Thêm tài khoản'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Tài Khoản:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="user_name"
                                value={objectTask.user_name}
                                required
                                disabled={objectTask.id_account===''?false:true}
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Mật khẩu:</p>
                            <input type='password'
                                className="form-control"
                                onChange={onHandleChange}
                                name="password"
                                value={objectTask.password}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Người Sử Dụng:</p>
                            <select 
                                className="form-control"
                                name="position"
                                onChange={onHandleChange}
                                value={objectTask.position}
                                required
                            >
                                <option value='0'>Khách hàng</option>
                                <option value='1'>Nhân viên</option>
                                <option value='2'>Chủ cửa hàng</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Email: </p>
                            <input type='email' 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.email}
                                name="email"
                                required
                                disabled={objectTask.id_account===''?false:true}
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