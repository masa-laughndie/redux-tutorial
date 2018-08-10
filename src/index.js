import React, { Component } from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./components/VisibleTodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";

export default function TodoApp({ store }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
