// import libary style
import { useState } from 'react';
import SmallBanner from '../smallbanner/SmallBanner';
import './Search.scss';

// code function here
function Search(props) {
    // get props
    const {
        setKeywordContainer
    } = props;

    // declare state component
    const [keyword, setKeyword] = useState('');

    // handle when change keyword
    const onHandleChange = event => {
        const value = event.target.value;

        setKeywordContainer(value);
        setKeyword(value);
    }


    // get props
    const {
        listIndex
    } = props;


    return(
        <>
            <SmallBanner title="Tìm kiếm"/>    
            <div className="search">
                <div className='wrapper'>
                    <div className='search__head'>
                        <form method='' action=''>
                            <div className='form-group'>
                                <input type='search'
                                    onChange={onHandleChange}
                                    placeholder='Nhập tên sản phẩm cần tìm kiếm...'
                                />
                            </div>
                        </form>
                    </div>

                    <h2>Sản phẩm</h2>
                    <div className='search__body'>
                        
                        {
                            listIndex
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Search;