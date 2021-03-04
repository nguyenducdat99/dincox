// import style library, component
import { useState } from 'react';
import './TaskSearch.scss';

// code function here
function TaskSearch(props) {
    // daclare state
    const [keyword, setKeyword] = useState('');

    // handle when input
    var onHandleChange = event => {
        setKeyword(event.target.value)
    }

    // handle when click button search
    var onSearch = () => {
        props.onSearch(keyword)
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