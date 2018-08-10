import { connect } from "react-redux";
import setVisibilityFilter from "../actions/setVisibilityFilter";
import Link from "./Link";

function mapStateToProps({ visibilityFilter }, { filter, children }) {
  return {
    active: filter === visibilityFilter,
    children,
    visibilityFilter
  };
}

function mapDispatchToProps(dispatch, { filter }) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(filter));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
