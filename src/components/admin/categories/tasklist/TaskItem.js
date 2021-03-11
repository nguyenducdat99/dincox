import { connect } from 'react-redux';
import * as Actions  from '../../../../actions/Actions';

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, itemRec } = props;

    // console.log('item in task item: ' + )
    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItemEditRec(itemRec.id_category);
        props.onOpenFormRec();
    }
    
    // handle update status
    var onUpdateStatus = () => {
        props.onUpdateStatus(itemRec);
    }

    // handle delete task
    var onDeleteItem = () => {
        if (window.confirm('Bạn có muốn xóa không?')) {
            props.onDeleteItemRec(itemRec.id_category);
            props.onCloseFormRec();
        } 
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
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
                    <span className="fa fa-trash"></span>Xóa
                </button>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: item => {
            dispatch(Actions.updateStatusAccountRequest(item));
        },
        onDeleteItem: id_account => {
            dispatch(Actions.deleteAccountRequest(id_account));
        },
        onOpenForm: () => {
            dispatch(Actions.openForm());
        },
        onCloseForm: () => {
            dispatch(Actions.closeForm());
        },
        onSelectItem: id => {
            dispatch(Actions.selectAccountRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);