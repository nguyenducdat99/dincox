import { connect } from 'react-redux';
import * as Actions  from '../../../../actions/Actions';

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, task } = props;
    const position = ['Khách hàng', 'Nhân viên', 'Chủ cửa hàng'];

    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItemEdit(task);
        props.onOpenForm();
    }
    
    // handle update status
    var onUpdateStatus = () => {
        props.onUpdateStatus(task.id_account);
    }

    // handle delete task
    var onDeleteTask = () => {
        if (window.confirm('Bạn có muốn xóa không?')) {
            props.onDeleteItem(task.id_account);
            props.onCloseForm();
        } 
    }

    return (
        <tr className={index%2===0?"task-list__table__line-odd":''}>
            <td>{index}</td>
            <td>{task.user_name}</td>
            <td>{position[(task.position*1)]}</td>
            <td>{task.email}</td>
            <td>
                {
                    <span 
                        className={!(task.status) ? 'label label-danger' : 'label label-info' } 
                        onClick={onUpdateStatus}
                    >
                        { (task.status) ? 'Kích Hoạt' : 'Ẩn' } 
                    </span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-warning" onClick={onSelectItem}>
                    <span className="fa fa-pencil"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={onDeleteTask}>
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
        onUpdateStatus: id_account => {
            dispatch(Actions.updateStatusAccount(id_account));
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
        onSelectItemEdit: item => {
            dispatch(Actions.selectAccountEdit(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);