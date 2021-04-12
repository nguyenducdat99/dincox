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
        onClearItemEditRec,
        items
    } = props;


    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_sale: -1,
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
            if (itemEditRec.id_size!=='') {
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

        if(checkNameExist(items,objectTask.sale_name))
            return alert('Khuyến mãi đã tồn tại.');
        if(moment(objectTask.start_at) >= moment(objectTask.end_at)) 
            return alert('Ngày kết thúc phải muộn hơn ngày bắt đầu khuyến mãi.');
        if(moment(objectTask.start_at) < moment(formatDateForInput()))
            return alert('Thời gian bắt đầu không được sớm hơn ngày hôm nay.');
        if(moment(objectTask.end_at) <= moment(formatDateForInput()))
            return alert('Thời gian kết thúc phải muốn hơn hôm nay.');
        

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
                id_sale: -1,
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
        onClearItemEditRec(
            {
                id_sale: -1,
                sale_name: '',
                created_at: null,
                edited_at: null,
                start_at: formatDateForInput(),
                end_at: formatDateForInput(),
                status: 0
            }
        )
        onCloseFormRec();
    }


    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{itemEditRec.id_size!==''?'Sửa Khuyến Mại':'Thêm Khuyến Mại'}
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

function checkNameExist(array, name) {
    let result = false;

    array.forEach(element => {
        if(element.sale_name.trim()===name.trim()) result = true;
    });

    return result;
}

export default TaskForm;