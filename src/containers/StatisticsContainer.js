// import style library, components
import { connect } from "react-redux";
import * as Actions from "../actions/Actions";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Statistics from "../components/admin/statistics/Statistics";

// code function here
function StatisticContainer(props) {
  // get props
  const {
    accounts,
    products,
    articles,
    onFetchDataProduct,
    onFetchDataUser,
    onFetchDataArticle,
  } = props;

  // load data
  useEffect(() => {
    onFetchDataArticle();
    onFetchDataProduct();
    onFetchDataUser();
    // eslint-disable-next-line
  }, []);

  // return ui
  return (
    <Statistics accounts={accounts} products={products} articles={articles} />
  );
}

StatisticContainer.propTypes = {
  accounts: PropTypes.array,
  products: PropTypes.array,
  articles: PropTypes.array,
  onFetchDataProduct: PropTypes.func,
  onFetchDataUser: PropTypes.func,
  onFetchDataArticle: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    accounts: state.ListAccount,
    articles: state.listArticle,
    products: state.ListProduct,
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
  };
};

// custom sort
const sortNameUp = (a, b) => {
  if (a.size_name > b.size_name) return 1;
  if (a.size_name < b.size_name) return -1;
  return 0;
};
const sortNameDown = (a, b) => {
  if (a.size_name > b.size_name) return -1;
  if (a.size_name < b.size_name) return 1;
  return 0;
};
const sortStatusFalse = (a, b) => {
  if (a.status > b.status) return 1;
  if (a.status < b.status) return -1;
  return 0;
};
const sortStatusTrue = (a, b) => {
  if (a.status > b.status) return -1;
  if (a.status < b.status) return 1;
  return 0;
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticContainer);
