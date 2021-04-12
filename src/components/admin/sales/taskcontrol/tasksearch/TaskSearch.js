// import style library, component
import { useState } from 'react';
import './TaskSearch.scss';

// code function here
function TaskSearch(props) {
    // get props
    const {
        onSearch
    } = props;


    // daclare state
    const [keyword, setKeyword] = useState('');

    // handle when input
    var onHandleChange = event => {
        let value = event.target.value;

        setKeyword(value)
        onSearch(value);
    }


    return (
        <div className="task-search">
            <input type="text" 
                className="task-search__form-group-input" 
                placeholder="Nhập từ khóa..."
                value={keyword}
                onChange={onHandleChange}
                
            />
            <span className="task-search__form-group-button">
                <button type="button" className="btn-primary" onClick={onSearch}>
                    <span>
                        <span className="fa fa-search"></span>Tìm
                    </span>
                </button>
            </span>
        </div>
    )
}
export default TaskSearch;