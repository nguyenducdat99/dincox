// import style library
import './TaskList.scss'

// code function here
function TaskList() {
    // declare list Item
    const listItem = [0,1,2,3,4,5,6];

    let listIndex = listItem.map((item, index) => {
        if (index%2===0) {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            )
        }
        return (
            <tr key={index} className="task-list__table__line-odd">
                <td>{index+1}</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        )

    });

    return (
        <div className="task-list">
            <table className="task-list__table"> 
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Người sử dụng</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
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

export default TaskList;