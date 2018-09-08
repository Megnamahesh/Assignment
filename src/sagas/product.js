import {put, takeLatest} from "redux-saga/effects";

import * as actionCreators from "../actions/productsAction";
import {GET_PRODUCTS} from "../constants/productType";

let URI = "http://10.110.60.163:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

export function* productWatchers() {
    yield takeLatest(GET_PRODUCTS, getProducts)
}