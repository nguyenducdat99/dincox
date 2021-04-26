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
            id_new: '',
            author: '',
            title: '',
            contents: '',
            reference_links: '',
            status: 0
        }
    )
    useEffect(
        () => {
            if (itemEditRec.id_new!=='') {
                setObjectTask(itemEditRec);
            }else {
                onClear();
            }
            // eslint-disable-next-line 
        }, [itemEditRec]
    )

    // handle when submit
    const onHandleSubmit = event => {
        event.preventDefault();
 
        onSaveItemRec(objectTask);
        onClear();
        onExitForm();
    }

    // handle when value change
    const onHandleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        setObjectTask(
            {
                ...objectTask, 
                [name]: value
            }
        )
    }

    // clear value form
    const onClear = () => {
        setObjectTask(
            {
                ...objectTask,
                id_new: '',
                author: '',
                title: '',
                contents: '',
                reference_links: '',
                status: 0
            }
        )
    }

    // Exit this form
    const onExitForm = () => {
        onClearItemEditRec(
            {
                id_new: '',
                author: '',
                title: '',
                contents: '',
                reference_links: '',
                status: 0
            }
        )
        onCloseFormRec();
    }

    
    // return ui
    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{itemEditRec.id_new!==''?'Sửa bài viết':'Thêm bài viết'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Tiêu đề:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="title"
                                value={objectTask.title}
                                required
                                />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <p>Tác giả:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="author"
                                value={objectTask.author}
                                required
                                />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <p>Trích dẫn (Đường link youtube):</p>
                                <input type='url' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="reference_links"
                                value={objectTask.reference_links}
                                required
                                />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Nội dung:</p>
                                <textarea
                                    className="form-control" 
                                    onChange={onHandleChange}
                                    name="contents"
                                    value={objectTask.contents}
                                    rows='4'
                                >
                                </textarea>
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