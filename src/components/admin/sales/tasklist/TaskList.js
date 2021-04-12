// import style library
import { useState } from 'react';
import './TaskList.scss'

// code function here
function TaskList(props) {
    // get props;
    const {
        listItem
    } = props;

    // declare state;
    const [pageNumber, setPageNumber] = useState(0);

    // list item for current page
    const quantityItem = 10;
    const startSlice = pageNumber*quantityItem;
    const endSlice = (pageNumber+1)*quantityItem;
    const itemInPage = listItem.slice(startSlice,endSlice);

    return (
        <>
            <div className="task-list">
                <table className="task-list__table"> 
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khuyến mãi</th>
                            <th>Thời gian bắt đầu</th>
                            <th>Thời gian kết thúc</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemInPage
                        }
                    </tbody>
                </table>
            </div>
            <div className="sales__manager__pagination">
                <button type="button">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <input type="text" value={pageNumber+1} readOnly/>
                <button type='button'>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </>
    )
}

export default TaskList;