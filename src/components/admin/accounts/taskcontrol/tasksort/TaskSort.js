// import style library
import './TaskSort.scss';

// code function here
function TaskSort() {
    return ( 
        <div className="task-sort">
            <select className="task-sort__select">
                <option value="0">Tên A-Z</option>
                <option value="1">Tên Z-A</option>
                <option value='2'>Trạng thái kích hoạt</option>
                <option value='3'>Trạng thái ẩn</option>
            </select>
        </div>
    )
}

export default TaskSort;