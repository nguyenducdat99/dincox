// import style library, component
import { Link } from 'react-router-dom';
import './Admin.scss';
import SmallBanner from '../fixcontents/smallbanner/SmallBanner';
import Maintain from './maintain.png';

// code function here
function Admin() {
    return(
        <>
            <SmallBanner title="Quản lý" />
            <div className="admin">
                <div className="wrapper">
                    <div className="admin__grid">
                        <div className="admin__nav">
                            <ul>
                                <li>
                                    <Link to="/managers/accounts">Quản lý tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="/managers/categories">Quản lý thể loại</Link>
                                </li>
                                <li>
                                    <Link to="/managers/products">Quản lý sản phẩm</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="admin__description">
                            <img src={Maintain} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;
