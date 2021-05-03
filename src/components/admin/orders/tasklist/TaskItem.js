function TaskItem(props) {
    //  get props, declare variable, constant
    const { 
        index, 
        itemRec,
        optionStatus,
        onUpdateStatusRec,
        onOpenFormRec,
        onSelectItemEditRec 
    } = props;

    // handle return item for onSlectItem
    const onSelectItem = () => {
        onSelectItemEditRec(itemRec.id_size);
        onOpenFormRec();
    }
    
    // handle update status
    const onUpdateStatus = () => {
        onUpdateStatusRec(itemRec);
    }

    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{'dincox'+itemRec.id_order}</td>
            <td>{itemRec.receiver}</td>
            <td>{itemRec.sent_to}</td>
            <td>
                <p>{itemRec.number_phone}</p>
                <p>{itemRec.email}</p>
            </td>
            <td>{itemRec.create_at}</td>
            <td>
                <select>
                    {optionStatus}
                </select>
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-search"></span>Chi tiết
                </button>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-print"></span>In hóa đơn
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;