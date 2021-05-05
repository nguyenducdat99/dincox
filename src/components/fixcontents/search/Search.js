// import libary style
import SmallBanner from '../smallbanner/SmallBanner';
import './Search.scss';

// code function here
function Search(props) {
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