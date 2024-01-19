import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_PROGRESS, PUT_PRODUCT_SUCCESS } from "../action/action"

const initialState = {
    product: [],

    getProductProgrss: false,
    getProductError: null,

    postProductProgrss: false,
    postProductError: null,

    deleteProductProgrss: false,
    deleteProductError: null,

    putProductProgress:false,
    putProductError:null,

    dataIsLoaded: false,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return {
                ...state,
                getProductProgrss: true,
                getProductError: null,
                dataIsLoaded: false,
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                getProductProgrss: false,
                getProductError: null,
                product: action.data,
                dataIsLoaded: true,
            }
        }

        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                getProductProgrss: false,
                getProductError: action.data,
                dataIsLoaded: false,
            }
        }

        // post 

        case POST_PRODUCT_PROGRESS: {
            return {
                ...state,
                getProductProgrss: true,
                getProductError: null,
                dataIsLoaded: false,
            }
        }

        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                getProductProgrss: false,
                getProductError: null,
                product: state.product.concat(action.data),
                dataIsLoaded: true,
            }
        }

        case POST_PRODUCT_ERROR: {
            return {
                ...state,
                getProductProgrss: false,
                getProductError: action.data,
                dataIsLoaded: false,
            }
        }

        // delete


        case DELETE_PRODUCT_PROGRESS: {
            return {
                ...state,
                deleteProductProgrss: true,
                deleteProductError: null,
                dataIsLoaded: false,
            }
        }

        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                deleteProductProgrss: false,
                deleteProductError: null,
                product: state.product.filter((e)=>e.id!==action.data),
                dataIsLoaded: true,
            }
        }

        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                deleteProductProgrss: false,
                deleteProductError: action.data,
                dataIsLoaded: false,
            }
        }

        // put update

        case PUT_PRODUCT_PROGRESS: {
            return {
                ...state,
                deleteProductProgrss: true,
                deleteProductError: null,
                dataIsLoaded: false,
            }
        }

        // case PUT_PRODUCT_SUCCESS: {
        //     return {
        //         ...state,
        //         deleteProductProgrss: false,
        //         deleteProductError: null,
        //         product:state.product.map((val)=>{
        //             if(val.id===action.data.id){
        //                 return{
        //                     ...val,...action.data
        //                 }
        //             }
        //             else{
        //                 return val
        //             }
        //         }),
        //         dataIsLoaded: true,
        //     }
        // }

        case PUT_PRODUCT_SUCCESS: {
            return {
                ...state,
                deleteProductProgrss: false,
                deleteProductError: null,
                product:state.product.map((val)=> val.id == action.data.id? action.data : val  ),
                dataIsLoaded: true,
            }
        }

        case PUT_PRODUCT_ERROR: {
            return {
                ...state,
                deleteProductProgrss: false,
                deleteProductError: action.data,
                dataIsLoaded: false,
            }
        }



        default: {
            return {
                ...state
            }
        }
    }
}


export default productReducer