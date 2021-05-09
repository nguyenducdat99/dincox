// import style library, component
import { Link } from "react-router-dom";
import "./Admin.scss";
import SmallBanner from "../fixcontents/smallbanner/SmallBanner";
import Maintain from "./maintain.png";

// code function here
function Admin() {
  return (
    <>
      <SmallBanner title="Quản lý" />
      <div className="admin">
        <div className="wrapper">
          <div className="admin__grid">
            <div className="admin__nav">
              <div className="admin__nav__head">
                <h3>Mời bạn lựa chọn:</h3>
              </div>
              <div className="admin__nav__body">
                <div className="admin__nav__body__select">
                  <Link to="/managers/accounts">Quản lý tài khoản</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/categories">Quản lý danh mục</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/products">Quản lý sản phẩm</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/sizes">Quản lý kích thước</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/sales">Quản lý khuyến mại</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/articles">Quản lý bài viết</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/orders">Quản lý đơn hàng</Link>
                </div>

                <div className="admin__nav__body__select">
                  <Link to="/managers/statistics">Thống kê dữ liệu</Link>
                </div>
              </div>
            </div>
            <div className="admin__description">
              <img src={Maintain} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
