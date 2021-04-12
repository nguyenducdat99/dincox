// import style library, component
import moment from 'moment';
import { useEffect, useState } from 'react';
import './TaskForm.scss';


// function code here
function TaskForm(props) {
    // get props
    const {
        onSaveItemRec,
        itemEditRec,
        onCloseFormRec,
        onClearItemEditRec
    } = props;


    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_sale: '',
            sale_name: '',
            created_at: null,
            edited_at: null,
            start_at: formatDateForInput(),
            end_at: formatDateForInput(),
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

        if(moment(objectTask.start_at) >= moment(objectTask.end_at)) 
            return alert('Ngày kết thúc phải lớn hơn ngày bắt đầu khuyến mãi.');

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
                id_sale: '',
                sale_name: '',
                created_at: null,
                edited_at: null,
                start_at: formatDateForInput(),
                end_at: formatDateForInput(),
                status: 0
            }
        )
    }


    // Exit this form
    var onExitForm = () => {
        props.onClearItemEditRec(
            {
                id_sale: '',
                sale_name: '',
                created_at: null,
                edited_at: null,
                start_at: new Date(),
                end_at: new Date(),
                status: 0
            }
        )
        props.onCloseFormRec();
    }


    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{props.itemEditRec.id_size!==''?'Sửa Khuyến Mại':'Thêm Khuyến Mại'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Khuyến mại:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="sale_name"
                                value={objectTask.sale_name}
                                required
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Ngày bắt đầu:</p>
                                <input type='date' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="start_at"
                                value={objectTask.start_at}
                                required
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Ngày kết thúc:</p>
                                <input type='date' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="end_at"
                                value={objectTask.end_at}
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

function formatDateForInput() {
    const d = new Date();
    let isoDate = d.toISOString();
    let splitDate = isoDate.split('T')
    
    return splitDate[0];
}

export default TaskForm;