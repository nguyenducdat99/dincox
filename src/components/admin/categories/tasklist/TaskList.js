// import style library
import './TaskList.scss'
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

// code function here
function TaskList(props) {
    // declare list Item
    var { task } = props;
    
    let listIndex = task.map((item, index) => {
        return (
            <TaskItem 
                key={index}
                index={index+1} 
                task={item}
                onSelectItem={props.onSelectItem}
                onDeleteTask={props.onDeleteTask}
            />
        )
    });

    return (
        <div className="task-list">
            <table className="task-list__table"> 
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tác giả</th>
                        <th>Tên thể loại</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listIndex
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        task: state.listCategory
    }
}

export default connect(mapStateToProps,null)(TaskList);