import { connect } from 'react-redux';
import * as Actions from '../../../../actions/Actions';

function TaskItem(props) {
    //  get props, declare variable, constant
    var { index, task} = props;

    // handle return item for onSlectItem
    var onSelectItem = () => {
        props.onSelectItem(task);
    }
    
    // handle update status
    var onUpdateStatus = () => {
       props.onUpdateStatus(task.id_category);
    }

    // handle delete task
    var onDeleteTask = () => {
        props.onDeleteTask(task);
    }

    return (
        <tr className={(index%2===0)?"task-list__table__line-odd":""}>
            <td>{index}</td>
            <td>{task.id_account}</td>
            <td>{task.category_name}</td>
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
        onUpdateStatus: id_category => {
            dispatch(Actions.updateStatusCategory(id_category));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);