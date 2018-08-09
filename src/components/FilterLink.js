import React, { Component } from "react";
import Link from "./Link";
import store from "../store";

export default class FilterLink extends Component {
  render() {
    const { filter, children } = this.props;
    const { visibilityFilter } = store.getState();

    return (
      <Link
        active={filter === visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter
          })
        }
      >
        {children}
      </Link>
    );
  }
}
