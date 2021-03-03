// import style library, component
import './TaskSearch.scss';

// code function here
function TaskSearch() {
    return (
        <div className="task-search">
            <input type="text" className="task-search__form-group-input" placeholder="Nhập từ khóa..."/>
            <span className="task-search__form-group-button">
                <button type="button" className="btn-primary">
                    <span>
                        <span className="fa fa-search"></span>Tìm
                    </span>
                </button>
            </span>
        </div>
    )
}
export default TaskSearch;