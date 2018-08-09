import React, { Component } from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./components/VisibleTodoList";
import store from "./store";

let nextTodoId = 0;

export default class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => {
            store.dispatch({
              type: "ADD_TODO",
              text,
              id: nextTodoId++
            });
          }}
        />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById("root")
  );
}

store.subscribe(render);

render();
