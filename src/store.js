import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers/todoApp";
import { logger } from "redux-logger";

export default createStore(todoApp, applyMiddleware(logger));
