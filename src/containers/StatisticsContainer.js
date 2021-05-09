// import style library, components
import { connect } from "react-redux";
import * as Actions from "../actions/Actions";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Statistics from "../components/admin/statistics/Statistics";

// code function here
function StatisticContainer(props) {
  // get props
  const {
    accounts,
    products,
    articles,
    orders,
    onFetchDataProduct,
    onFetchDataUser,
    onFetchDataArticle,
    onFetchDataOrder,
  } = props;

  // load data
  useEffect(() => {
    onFetchDataArticle();
    onFetchDataProduct();
    onFetchDataUser();
    onFetchDataOrder();
    // eslint-disable-next-line
  }, []);

  // return ui
  return (
    <Statistics
      accounts={accounts}
      products={products}
      articles={articles}
      orders={orders}
    />
  );
}

StatisticContainer.propTypes = {
  accounts: PropTypes.array,
  products: PropTypes.array,
  articles: PropTypes.array,
  orders: PropTypes.array,
  onFetchDataProduct: PropTypes.func,
  onFetchDataUser: PropTypes.func,
  onFetchDataArticle: PropTypes.func,
  onFetchDataOrder: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.ListAccount,
    articles: state.listArticle,
    products: state.ListProduct,
    orders: state.order,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataUser: () => {
      dispatch(Actions.fetchAccountRequest());
    },
    onFetchDataProduct: () => {
      dispatch(Actions.fetchProductRequest());
    },
    onFetchDataArticle: () => {
      dispatch(Actions.fetchArticleRequest());
    },
    onFetchDataOrder: () => {
      dispatch(Actions.fetchDataStatisticsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticContainer);
