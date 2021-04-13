// import style library
import './TaskControl.scss';
import TaskSearch from './tasksearch/TaskSearch';
import TaskSort from './tasksort/TaskSort';


// function code here
function TaskControl(props) {
    // get props
    const {
        onSearch,
        onSort
    } = props;

    // return ui
    return (
        <div className="task-control">
            <div className="task-control__grid">
                <div className="task-control__search">
                    <TaskSearch
                        onSearch={onSearch}
                    />
                </div>
                <div className="task-control__sort">
                    <TaskSort
                        onSort={onSort}
                    />
                </div>
            </div>
        </div>
    )
}

export default TaskControl;