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
    const onHandleChange = event => {
        let value = event.target.value;

        setKeyword(value)
        onSearch(value);
    }

    // clear keyword
    const clear = () => {
        setKeyword('');
        onSearch('');
    };

    return (
        <div className="task-search">
            <input type="text" 
                className="task-search__form-group-input" 
                placeholder="Nhập từ khóa..."
                value={keyword}
                onChange={onHandleChange}
                
            />
            <span className="task-search__form-group-button">
                <button type="button" className="btn-primary" onClick={clear}>
                    <span>
                        <span className="fa fa-repeat"></span>Xóa
                    </span>
                </button>
            </span>
        </div>
    )
}
export default TaskSearch;