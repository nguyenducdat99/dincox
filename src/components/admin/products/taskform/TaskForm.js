// import style library, component
import { useEffect, useState } from 'react';
import './TaskForm.scss';


// function code here
function TaskForm(props) {
    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_product: '',
            id_category: '',
            product_name: '',
            is_sale: 0,
            description: '',
            price: 0,
            status: 0,
        }
    )
    useEffect(
        () => {
            if (props.itemEditRec.id_prdouct!=='') {
                setObjectTask(props.itemEditRec);
            }else {
                onClear();
            }
            // eslint-disable-next-line 
        }, [props.itemEditRec]
    )

    // get props 
    const { optionCategoryUIRec } = props;

   
    // handle when submit
    const onHandleSubmit = event => {
        event.preventDefault();

        if (objectTask.id_category*1===0) return alert('Vui lòng chọn danh mục sản phẩm!');
        props.onSaveItemRec(objectTask);
        // console.log(objectTask);
        onClear();
        onExitForm();
    }

    // handle when value change
    const onHandleChange = event => {
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
    const onClear = () => {
        setObjectTask(
            {
                ...objectTask,
                id_product: '',
                id_category: '',
                product_name: '',
                is_sale: 0,
                description: '',
                price: 0,
                status: 0,
            }
        )
    }

    // Exit this form
    const onExitForm = () => {
        props.onClearItemEditRec(
            {
                id_product: '',
                id_category: '',
                product_name: '',
                is_sale: 0,
                description: '',
                price: 0,
                status: 0,
            }
        )
        props.onCloseFormRec();
    }

    

    return (
        <div className="task-form">
            <div className="task-form__title">
                <h3>{props.itemEditRec.id_category!==''?'Sửa Sản Phẩm':'Thêm Sản Phẩm'}
                    <span className="fa fa-times-circle task-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="task-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                    <div className="form-group">
                        <label>
                            <p>Tên Sản Phẩm:</p>
                                <input type='text' 
                                className="form-control" 
                                onChange={onHandleChange}
                                name="product_name"
                                value={objectTask.product_name}
                                required
                                />
                        </label>
                    </div>
                     
                    <div className="form-group">
                        <label>
                            <p>Danh Mục:</p>
                            <select 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.id_category}
                                name="id_category"
                                required
                            >
                                <option value={0}>Lựa Chọn</option>
                                { optionCategoryUIRec }
                            </select>
                        </label>
                    </div>
                    
                    <div className="form-group">
                        <label>
                            <p>Giá</p>
                            <input type='number' min='0'
                                className="form-control" 
                                onChange={onHandleChange}
                                name="price"
                                value={objectTask.price}
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <p>Khuyến Mại:</p>
                            <select 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.is_sale}
                                name="is_sale"
                                required
                            >
                                <option value={0}>Không</option>
                                <option value={1}>Có</option>
                            </select>
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