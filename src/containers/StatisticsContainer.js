// import style library, components
import { connect } from "react-redux";
import * as Actions from "../actions/Actions";
import * as Types from "../constants/ActionTypes";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Statistics from "../components/admin/statistics/Statistics";

// code function here
function SizesContainer(props) {
  // get props
  const {} = props;

  // load data
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  // return ui
  return <Statistics />;
}

SizesContainer.propTypes = {};

const mapStateToProps = (state) => {
  return {
    items: state.listSize,
    isDisplayForm: state.isDisplayForm,
    itemEdit: state.sizeEdit,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchApi: () => {
      dispatch(Actions.fetchSizesRequest());
    },
    onToggleForm: () => {
      dispatch(Actions.toggleForm());
    },
    onSelectItemEdit: (id) => {
      dispatch(Actions.selectSizeRequest(id));
    },
    onSaveItem: (item) => {
      dispatch(Actions.saveSizeRequest(item));
    },
    onClearItemEdit: (item) => {
      dispatch(Actions.selectSize(item));
    },
    onDeleteItem: (id) => {
      dispatch(Actions.deleteSizeRequest(id));
    },
    onUpdateStatus: (item) => {
      dispatch(Actions.updateStatusSizeRequest(item));
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

export default connect(mapStateToProps, mapDispatchToProps)(SizesContainer);
