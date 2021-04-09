// import style library
import './TaskList.scss'

// code function here
function TaskList(props) {

    return (
        <div className="task-list">
            <table className="task-list__table"> 
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khuyến mãi</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listItem
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;