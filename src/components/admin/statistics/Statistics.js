// import style library, components
import "./Statistics.scss";
import SmallBanner from "../../fixcontents/smallbanner/SmallBanner";

// function code here
function Statistics(props) {
  // get props
  const {} = props;

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
                <sup>10</sup>/<sub>30</sub>
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

export default Statistics;
