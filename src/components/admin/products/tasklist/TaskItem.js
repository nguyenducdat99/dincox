import * as constants from '../../../../constants/Config';

function TaskItem(props) {
    //  get props, declare variable, constant
    const {
        index, 
        itemRec, 
        categoriesRec,
        openFormQuantityRec, 
        openFormImageRec, 
        imagesRec,
        onUpdateSaleRec,
        onOpenFormRec,
        onSelectItemEditRec,
        onUpdateStatusRec
    } = props;

    // get images for item
    var path = findImages(imagesRec,itemRec.id_product);
    
    // conver path
    path = '' + constants.API_URL + path[0];

    // get category name
    const productCategory = findCategoryName(categoriesRec, itemRec.id_category);

    // handle return item for onSlectItem
    const onSelectItem = () => {
        onSelectItemEditRec(itemRec.id_product);
        onOpenFormRec();
    }

    // handle when update quantity
    const onUpdateQantity = () => {
        onSelectItemEditRec(itemRec.id_product);
        openFormQuantityRec()
    }

    // handle when update quantity
    const onUpdateImage = () => {
        onSelectItemEditRec(itemRec.id_product);
        openFormImageRec()
    }
    
    // handle update status
    const onUpdateStatus = () => {
        onUpdateStatusRec(itemRec);
    }
    
    // handle update sale
    const onUpdateSale = () => {
        onUpdateSaleRec(itemRec);
    }


    // return ui
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

            </td>
        </tr>
    )
}

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


export default TaskItem;