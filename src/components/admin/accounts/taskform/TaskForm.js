// import style library, component
import TaskSort from '../taskcontrol/tasksort/TaskSort';
import './TaskForm.scss';

// function code here
function TaskForm(props) {
    // Exit this form
    var onExitForm = () => {
        props.onExitForm();
    }

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>Thêm Tài Khoản
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="">
                    <div className="form-group">
                        <label>
                            <p>Tài Khoản:</p>
                            <input type='text' className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Mật khẩu:</p>
                            <input type='password' className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Người Sử Dụng:</p>
                            <input type='text' className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Email: </p>
                            <input type='email' className="form-control"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Trạng Thái:</p>
                            <select className="form-control">
                                <option value="0">Ẩn</option>
                                <option value="1">Kích hoạt</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group form-group--center">
                        <button type='submit' className="btn btn-warning">
                            <span className="fa fa-plus"></span>
                            Lưu Lại
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger">
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