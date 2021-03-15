function findCategoryName(items, id) {
    let result = '';
    items.forEach(element => {
        if ( element.id_category===id) result = element.category_name;
    });

    return result;
}

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, itemRec, categoriesRec } = props;

    // get category name
    var productCategory = findCategoryName(categoriesRec, itemRec.id_category);

    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItemEditRec(itemRec.id_category);
        props.onOpenFormRec();
    }
    
    // handle update status
    var onUpdateStatus = () => {
        props.onUpdateStatusRec(itemRec);
    }

    // handle delete task
    // eslint-disable-next-line
    var onDeleteItem = () => {
        // if (window.confirm('Bạn có muốn xóa không?')) {
        //     props.onDeleteItemRec(itemRec.id_category);
        //     props.onCloseFormRec();
        // } 
    }

    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{itemRec.product_name}</td>
            <td>
                <div className="task-list__table__image-demo">
                    
                </div>
            </td>
            <td>{productCategory}</td>
            <td>{itemRec.price}</td>
            <td>
                {
                    <span 
                        className={!(itemRec.status) ? 'label label-danger' : 'label label-info' } 
                    >
                        { (itemRec.status) ? 'Kích Hoạt' : 'Ẩn' } 
                    </span>
                }
            </td>
            <td>
                {
                    <span 
                        className={!(itemRec.status) ? 'label label-danger' : 'label label-info' } 
                        onClick={onUpdateStatus}
                    >
                        { (itemRec.status) ? 'Kích Hoạt' : 'Ẩn' } 
                    </span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-pencil"></span>Thêm số lượng
                </button>
                &nbsp;
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-pencil"></span>Sửa
                </button>

                {/* <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
                    <span className="fa fa-trash"></span>Xóa
                </button> */}
            </td>
        </tr>
    )
}

export default TaskItem;