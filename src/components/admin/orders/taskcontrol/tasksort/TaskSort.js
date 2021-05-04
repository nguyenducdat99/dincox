import { useState } from 'react';
import * as Types from '../../../../../constants/ActionTypes';
import './TaskSort.scss';

// code function here
function TaskSort(props) {
        // get props
        const {
            onSort
        } = props;
    
        // delcare type sort
        const [sortType, setSortType] = useState(Types.NAME_UP);
    
        const onHandleChange = (event) => {
            const value = event.target.value;
    
            setSortType(value);
            onSort(value);
        }
    
        return ( 
            <div className="task-sort">
                <select className="task-sort__select" 
                    onChange={onHandleChange}
                    value={sortType}
                >
                    <option value={Types.NAME_UP}>Tên đơn hàng A-Z</option>
                    <option value={Types.NAME_DOWN}>Tên đơn hàng Z-A</option>
                    <option value={Types.STATUS_TRUE}>Tên người nhận A-Z</option>
                    <option value={Types.STATUS_FALSE}>Tên người nhận Z-A</option>
                </select>
            </div>
        )
}

export default TaskSort;