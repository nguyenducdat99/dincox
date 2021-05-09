// import style library, components
import "./Statistics.scss";
import SmallBanner from "../../fixcontents/smallbanner/SmallBanner";
import moment from "moment";

// function code here
function Statistics(props) {
  // get props
  const { accounts, products, articles, orders } = props;

  // get data account update
  const dataAccountUpdate =
    accounts && accounts.length > 0 ? quantityAccountUpdate(accounts) : null;

  // get data product update
  const dataProductUpdate =
    products && products.length > 0 ? quantityProductUpdate(products) : null;

  // get data article update
  const dataArticleUpdate =
    articles && articles.length > 0 ? quantityArticleUpdate(articles) : null;

  // return ui
  return (
    <>
      <SmallBanner title="Thống kê dữ liệu" />
      <div className="statistics">
        <div className="wrapper">
          <h2>Cập nhật mới</h2>
          <div className="statistics__update__grid">
            <div className="statistics__update__column">
              <h3>Tài khoản thêm mới:</h3>
              <div className="chart">
                <sup
                  title={
                    "Số tài khoản đã tạo mới là: " +
                      dataAccountUpdate?.quantityUpdate || 0
                  }
                >
                  {dataAccountUpdate?.quantityUpdate || 0}
                </sup>
                /
                <sub
                  title={
                    "Tổng số tài khoản: " + dataAccountUpdate?.quantity || 0
                  }
                >
                  {dataAccountUpdate?.quantity || 0}
                </sub>
              </div>
            </div>
            <div className="statistics__update__column">
              <h3>Sản phẩm thêm mới:</h3>
              <div className="chart">
                <sup
                  title={
                    "Số sản phẩm đã tạo mới là: " +
                      dataProductUpdate?.quantityUpdate || 0
                  }
                >
                  {dataProductUpdate?.quantityUpdate || 0}
                </sup>
                /
                <sub
                  title={
                    "Tổng số sản phẩm là: " + dataProductUpdate?.quantity || 0
                  }
                >
                  {dataProductUpdate?.quantity || 0}
                </sub>
              </div>
            </div>
            <div className="statistics__update__column">
              <h3>Bài viết thêm mới:</h3>
              <div className="chart">
                <sup
                  title={
                    "Số bài viết đã tạo mới là: " +
                      dataArticleUpdate?.quantityUpdate || 0
                  }
                >
                  {dataArticleUpdate?.quantityUpdate || 0}
                </sup>
                /
                <sub
                  title={
                    "Tổng số bài viết là: " + dataArticleUpdate?.quantity || 0
                  }
                >
                  {dataArticleUpdate?.quantity || 0}
                </sub>
              </div>
            </div>
          </div>
          <h2>Doanh thu</h2>
          <div className="">doanh thu</div>
        </div>
      </div>
    </>
  );
}

const quantityAccountUpdate = (array) => {
  if (!array) return;

  let quantity = 0;
  let quantityUpdate = 0;

  array.forEach((element) => {
    quantity = quantity + 1;

    let month = element.join_at ? moment(element.join_at).format("MM") : "";

    if (month + "" === moment(new Date()).format("MM") + "")
      quantityUpdate = quantityUpdate + 1;
  });

  return {
    quantity,
    quantityUpdate,
  };
};
const quantityProductUpdate = (array) => {
  if (!array) return;

  let quantity = 0;
  let quantityUpdate = 0;

  array.forEach((element) => {
    quantity = quantity + 1;

    let month = element.created_at
      ? moment(element.created_at).format("yyyy-MM")
      : "";

    if (month + "" === moment(new Date()).format("yyyy-MM") + "")
      quantityUpdate = quantityUpdate + 1;
  });

  return {
    quantity,
    quantityUpdate,
  };
};
const quantityArticleUpdate = (array) => {
  if (!array) return;

  return quantityProductUpdate(array);
};

export default Statistics;
