// import style library
import './TaskControl.scss';
import TaskSearch from './tasksearch/TaskSearch';
import TaskSort from './tasksort/TaskSort';
import PropTypes from 'prop-types';

// function code here
function TaskControl(props) {
    const {
        onSearch,
        onSort
    } = props;

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


TaskControl.propTypes = {
    onSearch: PropTypes.func,
    onSort: PropTypes.func
}

export default TaskControl;