// import style library, component
import {  useState } from 'react';
import './ProductSale.scss';


// function code here
function TaskForm(props) {
    // get props 
    const { 
        onCloseProductSaleForm,
        optionProductUI,
        itemEdit,
        onAddSaleForProduct
    } = props;


    // declare state component
    const [objectTask,setObjectTask] = useState(
        {
            id_product: -1,
            id_sale: -1,
            discount: 0
        }
    )

   
    // handle when submit
    const onHandleSubmit = event => {
        event.preventDefault();
        if (objectTask.id_product*1===-1*1) return alert('Bạn vui lòng chọn sản phẩm cần thêm khuyến mãi!');
        
        // console.log(
        //     {
        //         id_product: objectTask.id_product*1,
        //         id_sale: itemEdit.id_sale*1,
        //         discount: objectTask.discount*1
        //     }
        // );
        onAddSaleForProduct(
            {
                id_product: objectTask.id_product*1,
                id_sale: itemEdit.id_sale*1,
                discount: objectTask.discount*1
            }
        )
        
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
                id_product: -1,
                id_sale: -1,
                discount: 0
            }
        )
    }

    // Exit this form
    const onExitForm = () => {
        onClear();
        onCloseProductSaleForm()
    }

    return (
        <div className="product-sale">
            <div className="product-sale__title">
                <h3>Thêm sản phẩm khuyến mãi
                    <span className="fa fa-times-circle product-sale__title__close" onClick={onExitForm}></span>
                </h3>
            </div>
            <div className="product-sale__body">
                <form action="" method="" onSubmit={onHandleSubmit}>

                    <div className="form-group">
                        <label>
                            <p>Chọn sản phẩm:</p>
                            <select 
                                className="form-control"
                                onChange={onHandleChange}
                                value={objectTask.id_product}
                                name="id_product"
                                title='Bạn có thể nhấn chữ cái đầu của sản phẩm để chọn nhanh.'
                                required
                            >
                                <option value={-1}>Lựa chọn</option>
                                <option value={0}>Chọn tất cả</option>
                                {
                                    optionProductUI
                                }
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <p>Giảm giá(%):</p>
                            <input type='number'
                                min='0'
                                max='99'
                                value={objectTask.quantity}
                                className="form-control"
                                name='discount'
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