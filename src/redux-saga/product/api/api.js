import axios from "axios"
import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API, PUT_PRODUCT_API } from "../../constant"

export const getProduct = () => {
    return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
        const data = res.data;
        const status = res.status;

        return {
            data, status
        };
    })
        .catch((err) => console.log(err))
}


export const postProduct = (action) => {
    return axios.post(BASE_URL + POST_PRODUCT_API, action.payload).then((res) => {
        const data = res.data;
        console.log(data , "data api");
        const status = res.status;

        return {
            data, status
        };
    })
        .catch((err) => console.log(err))
}

export const deleteProduct = (action) => {
    return axios.delete(BASE_URL + DELETE_PRODUCT_API+action.payload).then((res) => {
        const data = action.payload;
        const status = res.status;

        return {
            data, status
        };
    })
        .catch((err) => console.log(err))
}

// put data

// export const updateProduct = (action) => {

//     const id=action.payload.id
//     return axios.put(`${BASE_URL}${PUT_PRODUCT_API}${id}`,action.payload).then((res) => {
//         const data = action.payload;
//         const status = res.status;

//         return {
//             data, status
//         };
//     })
//         .catch((err) => console.log(err))
// }

export const updateProduct = (action) => {
    
    return axios.put(BASE_URL+PUT_PRODUCT_API+action.payload.id,action.payload).then((res) => {
        const data = action.payload;
        const status = res.status;

        return {
            data, status
        };
    })
        .catch((err) => console.log(err))
}