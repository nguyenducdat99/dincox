// import style library, component
import {  useState } from 'react';
import './ImagesForm.scss';



// function code here
function TaskForm(props) {
    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_product: '',
            id_new: '',
            title: '',
            path: "",
            status: 1
        }
    )

    // get props 
    const {closeFormImageRec,itemEditRec, onUpdateImageRec} = props;

    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();

        onUpdateImageRec(
            {
                id_product: itemEditRec.id_product,
                id_new: objectTask.id_new,
                title: itemEditRec.product_name,
                path: objectTask.path,
                status: objectTask.status
            }
        )
        // console.log(objectTask);
        
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
                id_product: '',
                id_new: '',
                title: '',
                path: "",
                status: 1
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        onClear();
        closeFormImageRec();
    }

    

    return (
        <div className="images-form">
            <div className="images-form__title">
                <h3>Thêm số lượng
                    <span className="fa fa-times-circle images-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="images-form__body">
                <form action="" method="" encType="multipart/form-data" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Số lượng:</p>
                            <input type='file'
                                value={objectTask.path}
                                className="form-control"
                                name='path'
                                onChange={onHandleChange}
                                required
                            />
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