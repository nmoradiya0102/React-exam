import { call, put } from "redux-saga/effects";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../../product/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from "../../product/action/action";
import Swal from "sweetalert2";

export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}

export function* handlePostProduct(action) {
    try {
        const res = yield call(postProduct, action);
        const status = res.status;
        const data = res.data;

        if (status === 201) {
            Swal.fire({
                title: "Good job!",
                text: "Your data Added succesfully!",
                icon: "success"
            });
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}

export function* handleDeleteProduct(action) {
    try {
        const res = yield call(deleteProduct, action);
        const status = res.status;
        const data = res.data;

        if (status === 201 || status === 200) {
            Swal.fire({
                title: "Good job!",
                text: "Your data deleted succesfully",
                icon: "success"
            });
            yield put({ type: DELETE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_PRODUCT_ERROR, e });
    }
}

// put 


export function* handleUpdateProduct(action) {
    try {
        const res = yield call(updateProduct, action);
        const status = res.status;
        const data = res.data;
        if (status === 201 || status === 200) {
            Swal.fire({
                title: "Good job!",
                text: "Your data Updated succesfully",
                icon: "success"
            });
            yield put({ type: PUT_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: PUT_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: PUT_PRODUCT_ERROR, e });
    }
}