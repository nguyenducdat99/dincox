import moment from "moment";

function TaskItem(props) {
    //  get props, declare variable, constant
    const { 
        index, 
        itemRec,
        onSelectItemEditRec,
        onOpenFormRec
    } = props;

    // handle return item for onSlectItem
    var onSelectItem = () => {
        onSelectItemEditRec(itemRec.id_sale);
        onOpenFormRec();
    }
    
    // handle update status
    var onUpdateStatus = () => {
       props.onUpdateStatusRec(itemRec);
    }

    // handle delete task
    // eslint-disable-next-line
    // var onDeleteItem = () => {
    //     if (window.confirm('Bạn có muốn xóa không?')) {
    //         props.onDeleteItemRec(itemRec.id_size);
    //         props.onCloseFormRec();
    //     } 
    // }

    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{itemRec.sale_name}</td>
            <td>{moment(itemRec.start_at).format('DD-MM-yyyy')}</td>
            <td>{moment(itemRec.end_at).format('DD-MM-yyyy')}</td>
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
                &nbsp;
                {/* <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
                    <span className="fa fa-trash"></span>Xóa
                </button> */}
            </td>
        </tr>
    )
}

export default TaskItem;