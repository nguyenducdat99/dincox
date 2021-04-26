// import style library
import { useState } from 'react';
import './TaskList.scss'

// code function here
function TaskList(props) {
    // get props
    const {
        listItem
    } = props;


    // declare state;
    const [pageNumber, setPageNumber] = useState(0);

    // list item for current page
    const quantityItem = 10;
    const quantityMax = Math.floor(listItem.length/quantityItem);
    const startSlice = pageNumber*quantityItem;
    const endSlice = (pageNumber+1)*quantityItem;
    const itemInPage = listItem.slice(startSlice,endSlice);

    

    // handle pagination
    const nextPage = () => {
        if (pageNumber === quantityMax) return;
        setPageNumber(pageNumber + 1);
    }

    const previousPage = () => {
        if (pageNumber === 0) return;
        setPageNumber(pageNumber - 1);
    }
    


    // return ui
    return (
        <>
            <div className="task-list">
                <table className="task-list__table"> 
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tiêu đề</th>
                            <th>Tác giả</th>
                            <th>Ngày tạo</th>
                            <th>Trích dẫn</th>
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
            <div className="task-list__pagination">
                <button type="button" onClick={previousPage}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <input type="text" value={pageNumber+1} readOnly/>
                <button type='button' onClick={nextPage}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
        </>
    )
}

export default TaskList;