function TaskItem(props) {
    //  get props
    const { 
        index, 
        itemRec ,
        onSelectItemEditRec,
        onOpenFormRec,
        onUpdateStatusRec
    } = props;

    // handle return item for onSlectItem
    const onSelectItem = () => {
        onSelectItemEditRec(itemRec.id_category);
        onOpenFormRec();
    }
    
    // handle update status
    const onUpdateStatus = () => {
        onUpdateStatusRec(itemRec);
    }

    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{itemRec.category_name}</td>
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
                    <span className="fa fa-pencil"></span>Sửa
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;