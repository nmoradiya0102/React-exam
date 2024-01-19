import { takeLatest } from "redux-saga/effects";
import { handleDeleteProduct, handleGetProduct, handlePostProduct, handleUpdateProduct } from "../manageProduct/manageproduct";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, PUT_PRODUCT_PROGRESS } from "../../product/action/action";

export function* getProductSaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}

export function* postProductSaga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handlePostProduct);
}

export function* deleteProductSaga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS, handleDeleteProduct);
}

export function* updateProductSaga() {
    yield takeLatest(PUT_PRODUCT_PROGRESS, handleUpdateProduct);
}