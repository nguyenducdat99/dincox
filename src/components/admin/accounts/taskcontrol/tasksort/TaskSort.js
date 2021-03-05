// import style library
// import { useEffect, useState } from 'react';
import './TaskSort.scss';

// code function here
function TaskSort(props) {
    // delcare type sort
    // const [sortType, setSortType] = useState('0');

    var onHandleChange = (event) => {
        // setSortType(event.target.value);
    }
    // useEffect(
    //     () => {
    //         props.onSort(sortType);
    //     },[sortType]
    // )

    return ( 
        <div className="task-sort">
            <select className="task-sort__select" onChange={onHandleChange}>
                <option value="0">Tên A-Z</option>
                <option value="1">Tên Z-A</option>
                <option value='2'>Trạng thái kích hoạt</option>
                <option value='3'>Trạng thái ẩn</option>
            </select>
        </div>
    )
}

export default TaskSort;