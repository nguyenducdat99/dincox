// import style library
import './TaskControl.scss';
import TaskSearch from './tasksearch/TaskSearch';
import TaskSort from './tasksort/TaskSort';


// function code here
function TaskControl() {
    return (
        <div className="task-control">
            <div className="task-control__grid">
                <div className="task-control__search">
                    <TaskSearch/>
                </div>
                <div className="task-control__sort">
                    <TaskSort />
                </div>
            </div>
        </div>
    )
}

export default TaskControl;