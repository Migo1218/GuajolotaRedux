import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { buyReducer } from "../reducers/buyReducer";

import { listarProductosReducer } from "../reducers/listarProductosReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
 
  listar: listarProductosReducer,
  buy: buyReducer
  
});

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    );

    export default store