// import style library, component
import {  useState } from 'react';
import './QuantityForm.scss';

function findQuantity(arr, id_product, id_size) {
    var result= -1;
    arr.forEach((item, index) => {

        if (item.id_size*1 === id_size*1&&item.id_product*1===id_product*1) {
            result = item.quantity; 
        };
    });
    return result;
}


// function code here
function TaskForm(props) {
    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_size: 0,
            quantity: 0
        }
    )

    // get props 
    const { closeFormQuantityRec,optionSizeUIRec,itemEditRec,onUpdateQuantityRec,sizeDetailsRec } = props;

    // get quantity of size currently
    var quantityCurrent = findQuantity(sizeDetailsRec,itemEditRec.id_product,objectTask.id_size);

    // get type action after submit
    var type = quantityCurrent===-1?true:false;

    // updat quantity of size current
    quantityCurrent = quantityCurrent===-1?0:quantityCurrent;
    
   
    // handle when submit
    var onHandleSubmit = event => {
        event.preventDefault();
        if (objectTask.id_size===0) return alert('Bạn vui lòng chọn kích thước!');
        onUpdateQuantityRec(
            {
                id_product: itemEditRec.id_product*1,
                id_size: objectTask.id_size*1,
                quantity: objectTask.quantity*1+quantityCurrent,
            },
            type
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
                id_size: 0,
                quantity: 0
            }
        )
    }

    // Exit this form
    var onExitForm = () => {
        onClear();
        closeFormQuantityRec();
    }

    

    return (
        <div className="quantity-form">
            <div className="quantity-form__title">
                <h3>Thêm số lượng
                    <span className="fa fa-times-circle quantity-form__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="quantity-form__body">
                <form action="" method="" onSubmit={onHandleSubmit}>
                   
         

                    <div className="form-group">
                        <label>
                            <p>Kích cỡ:</p>
                            <select 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.id_size}
                                name="id_size"
                                required
                            >
                                <option value={0}>Lựa chọn</option>
                                {
                                    optionSizeUIRec
                                }
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <p>Số lượng:</p>
                            <input type='number'
                                value={objectTask.quantity}
                                className="form-control"
                                name='quantity'
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