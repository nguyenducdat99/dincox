// import style library
import './TaskControl.scss';
import TaskSearch from './tasksearch/TaskSearch';
import TaskSort from './tasksort/TaskSort';


// function code here
function TaskControl(props) {
    return (
        <div className="task-control">
            <div className="task-control__grid">
                <div className="task-control__search">
                    <TaskSearch
                        onSearch={props.onSearch}
                    />
                </div>
                <div className="task-control__sort">
                    <TaskSort
                        onSort={props.onSort}
                    />
                </div>
            </div>
        </div>
    )
}

export default TaskControl;