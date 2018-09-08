import {combineReducers} from "redux";
import { createNavigationReducer} from "react-navigation-redux-helpers";

import productReducer from "./product";
import storeReducer from "./../config/store"
import {Navigator} from "../containers/AppNavigator";


const navReducer = createNavigationReducer(Navigator);

const rootReducer = combineReducers({
    productState: productReducer,
    storeState: storeReducer,
    navState: navReducer
})

export default rootReducer;