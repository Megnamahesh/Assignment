import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";


import AppWithNavigationState, { middleware } from "./src/containers/AppNavigator";
import rootReducer from "./src/reducers/index";
import {productWatchers} from "./src/sagas/product";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    productState: { 
    products: [],
    product: {},
    isLoading: false,
    isRefreshing: false,
    filteredAllProducts: [],
    page: 1,
    limit:40
 },
    storeState: { stores: [], isLoading: false }
  },
  applyMiddleware(middleware, sagaMiddleware)
);
sagaMiddleware.run(productWatchers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
    );
  }
}


