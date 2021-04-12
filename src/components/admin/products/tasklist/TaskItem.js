import * as constants from '../../../../constants/Config';

function findCategoryName(items, id) {
    let result = '';
    items.forEach(element => {
        if ( element.id_category*1===id*1) result = element.category_name;
    });

    return result;
}

function findImages(items,id) {
    let result = [];

    items.sort(function(a, b){return b.id_image - a.id_image})

    items.forEach(element => {
        if (element.id_product*1 === id*1) result.push(element.path);
    });

    return result;
}

function TaskItem(props) {
    //  get props, declare variable, constant
    var {index, itemRec, categoriesRec,openFormQuantityRec, openFormImageRec, imagesRec} = props;
    
    // get images for item
    var path = findImages(imagesRec,itemRec.id_product);
    
    // conver path
    path = '' + constants.API_URL + path[0];

    // get category name
    var productCategory = findCategoryName(categoriesRec, itemRec.id_category);

    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItemEditRec(itemRec.id_product);
        props.onOpenFormRec();
    }

    // handle when update quantity
    var onUpdateQantity = () => {
        props.onSelectItemEditRec(itemRec.id_product);
        openFormQuantityRec()
    }

    // handle when update quantity
    var onUpdateImage = () => {
        props.onSelectItemEditRec(itemRec.id_product);
        openFormImageRec()
    }
    
    // handle update status
    var onUpdateStatus = () => {
        props.onUpdateStatusRec(itemRec);
    }
    
    // handle update sale
    var onUpdateSale = () => {
        props.onUpdateSaleRec(itemRec);
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
                    <img src={path} alt={itemRec.product_name} />
                </div>
            </td>
            <td>{productCategory}</td>
            <td>{itemRec.price}</td>
            <td>
                {
                    <span 
                        className={!(itemRec.is_sale) ? 'label label-danger' : 'label label-info' } 
                        onClick={onUpdateSale}
                    >
                        { (itemRec.is_sale) ? 'Có' : 'Không' } 
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
                <button type="button" className="btn btn-warning" 
                    onClick={onUpdateQantity}
                >
                    <span className="fa fa-plus-square-o" aria-hidden="true"></span>Thêm số lượng
                </button>
                &nbsp;
                <button type="button" className="btn btn-warning" 
                    onClick={onUpdateImage}
                >
                    <span className="fa fa-file-image-o" aria-hidden="true"></span>Thêm ảnh
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