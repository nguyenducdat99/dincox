// import style library, components
import "./Statistics.scss";
import SmallBanner from "../../fixcontents/smallbanner/SmallBanner";
import moment from "moment";
import { Doughnut, PolarArea } from "react-chartjs-2";
import { useState } from "react";

const TIME_ZONE = [
  {
    value: 0,
    message: "DAY",
  },
  {
    value: 1,
    message: "MONTH",
  },
];

// function code here
function Statistics(props) {
  // declare state component
  const [timezone, setTimezone] = useState(TIME_ZONE[0].value * 1);

  // get props
  const { accounts, products, articles, orders } = props;

  // change state
  const onChangeTimezone = (a) => {
    setTimezone(a);
  };

  // get data account update
  const dataAccountUpdate =
    accounts && accounts.length > 0
      ? quantityAccountUpdate(accounts, timezone)
      : null;

  // get data product update
  const dataProductUpdate =
    products && products.length > 0
      ? quantityProductUpdate(products, timezone)
      : null;

  // get data article update
  const dataArticleUpdate =
    articles && articles.length > 0
      ? quantityArticleUpdate(articles, timezone)
      : null;

  // get data statistic
  const dataStatistic =
    orders && orders.length > 0 ? getDataStatistic(orders) : null;

  // convert to profit
  const profit = getProfit(dataStatistic, products);

  // get amount profit
  let amountProfit = 0;
  profit?.forEach((element) => {
    amountProfit = amountProfit + element.profit;
  });

  // get amount quantity
  let amountQuantity = 0;
  profit?.forEach((element) => {
    amountQuantity = amountQuantity + element.quantity;
  });

  // console.log({ profit });
  // covert data for chart
  const labels = profit?.map((element) => element.product_name) || [];
  const datasetsForDoughnut = profit?.map((element) => element.profit) || [];
  const datasetsForPolarArea = profit?.map((element) => element.quantity) || [];
  const backgroundColors = datasetsForDoughnut.map((element) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  });

  const dataDoughnut = {
    labels: labels,
    datasets: [
      {
        label: "Profit chart",
        data: datasetsForDoughnut,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const dataPolarArea = {
    labels: labels,
    datasets: [
      {
        label: "Quantity chart",
        data: datasetsForPolarArea,
        backgroundColor: backgroundColors,
      },
    ],
  };
  // return ui
  return (
    <>
      <SmallBanner title="Thống kê dữ liệu" />
      <div className="statistics">
        <div className="wrapper">
          <div className="statistics__timezone">
            <button
              type="button"
              onClick={() => onChangeTimezone(TIME_ZONE[0].value * 1)}
              className={
                timezone * 1 === TIME_ZONE[0].value * 1 ? "active" : ""
              }
              disabled={timezone * 1 === TIME_ZONE[0].value * 1 ? true : false}
            >
              Dữ liệu ngày
            </button>
            <button
              type="button"
              onClick={() => onChangeTimezone(TIME_ZONE[1].value * 1)}
              className={
                timezone * 1 === TIME_ZONE[1].value * 1 ? "active" : ""
              }
              disabled={timezone * 1 === TIME_ZONE[1].value * 1 ? true : false}
            >
              Dữ liệu tháng
            </button>
          </div>
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
          <div className="statistics__profit">
            <div className="statistics__profit__column">
              <h3>Lợi nhuận thu được: {amountProfit}đ</h3>
              <div className="profit">
                <Doughnut
                  data={{ ...dataDoughnut }}
                  options={{
                    maintainAspectRatio: false,
                  }}
                  height={300}
                />
              </div>
            </div>
            <div className="statistics__profit__column">
              <h3>Số lượng sản phẩm bán ra: {amountQuantity}(đôi)</h3>
              <div className="quantity">
                <PolarArea
                  data={{ ...dataPolarArea }}
                  options={{
                    maintainAspectRatio: false,
                  }}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const quantityAccountUpdate = (array, type) => {
  if (!array) return;

  let timeFormat = "DD-MM-YYYY";

  switch (type * 1) {
    case TIME_ZONE[0].value * 1:
      timeFormat = "DD-MM-YYYY";
      break;

    case TIME_ZONE[1].value * 1:
      timeFormat = "MM-YYYY";
      break;

    default:
      break;
  }

  let quantity = 0;
  let quantityUpdate = 0;

  array.forEach((element) => {
    quantity = quantity + 1;

    let time = element.join_at
      ? moment(element.join_at).format(timeFormat)
      : "";

    if (time + "" === moment(new Date()).format(timeFormat) + "")
      quantityUpdate = quantityUpdate + 1;
  });

  return {
    quantity,
    quantityUpdate,
  };
};

const quantityProductUpdate = (array, type) => {
  if (!array) return;

  let timeFormat = "DD-MM-YYYY";

  switch (type * 1) {
    case TIME_ZONE[0].value * 1:
      timeFormat = "DD-MM-YYYY";
      break;

    case TIME_ZONE[1].value * 1:
      timeFormat = "MM-YYYY";
      break;

    default:
      break;
  }

  let quantity = 0;
  let quantityUpdate = 0;

  array.forEach((element) => {
    quantity = quantity + 1;

    let time = element.created_at
      ? moment(element.created_at).format(timeFormat)
      : "";

    if (time + "" === moment(new Date()).format(timeFormat) + "")
      quantityUpdate = quantityUpdate + 1;
  });

  return {
    quantity,
    quantityUpdate,
  };
};

const quantityArticleUpdate = (array, type) => {
  if (!array) return;

  return quantityProductUpdate(array, type);
};
const findProduct = (array, id) => {
  let result = -1;

  if (!array || array.length === 0) return result;

  array.forEach((element, index) => {
    if (element.id_product * 1 === id * 1) result = index;
  });

  return result;
};

const getDataStatistic = (array) => {
  if (!array) return;

  const dataProduct = [];

  const arrayFilter = array.filter((element) => {
    const time1 = element.create_at
      ? moment(element.create_at, "DD-MM-yyyy").format("yyyy")
      : "";
    const time2 = element.create_at
      ? moment(element.create_at, "yyyy-MM-DD").format("yyyy")
      : "";

    return (
      time1 + "" === moment(new Date()).format("yyyy") + "" ||
      time2 + "" === moment(new Date()).format("yyyy") + ""
    );
  });

  arrayFilter.forEach((element) => {
    const index = findProduct(dataProduct, element.id_product);
    if (index !== -1) {
      dataProduct[index] = {
        ...dataProduct[index],
        quantity: dataProduct[index].quantity * 1 + element.quantity,
      };
    } else {
      dataProduct.push(element);
    }
  });

  return dataProduct;
};

const getProfit = (arrProductInOrder, arrProductInData) => {
  if (!arrProductInOrder || arrProductInOrder.length === 0) return;

  return arrProductInOrder.map((element) => {
    let profit = 0;
    const index = findProduct(arrProductInData, element.id_product);

    if (index !== -1) {
      profit =
        profit +
        element.quantity *
          arrProductInData[index].price *
          ((100 - element.discount) / 100);
    }

    return {
      id_product: element.id_product,
      product_name: arrProductInData[index]?.product_name,
      quantity: element.quantity,
      profit: profit,
    };
  });
};

export default Statistics;
