import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const compposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // to display Redux store in the Redux Chrome extension

const store = createStore(reducer, initialState, compposeEnhancer(applyMiddleware(thunk)));

export default store;
