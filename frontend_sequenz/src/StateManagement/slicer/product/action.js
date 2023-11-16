import { toast } from "react-toastify";
import { postProductApi,getCategoryApi,getSizeApi,getProductDetailsApi, addProductToWatchListApi, getProductFromWatchListApi, removeProductFromWatchListApi } from "../../api/product/product";
import { CATEGORIES, PRODUCTS, SIZES, PRODUCT_DETAILS, GET_ALL_PRODUCT_FROM_WATCH_LIST } from "./type";


export const sendForProductFilter = (data) => {
    return async function (dispatch) {
        const response = await postProductApi(data);
        if (response?.data?.success === true) {
            dispatch({
                type:PRODUCTS,
                response: response?.data?.data
            })
        }
    }
    }


    export const fetchProductDetails = () => {
        return async function (dispatch) {
            const response = await getProductDetailsApi();
            if (response?.data?.success === true) {
                dispatch({
                    type: PRODUCT_DETAILS,
                    response: response?.data?.data
                })
            }
        }
    }

    export const fetchCategory = () => {
        return async function (dispatch) {
            const response = await getCategoryApi();
            if (response?.data?.success === true) {
                dispatch({
                    type: CATEGORIES,
                    response: response?.data?.data
                })
            }
        }
    }


    export const fetchSize = () => {
        return async function (dispatch) {
            const response = await getSizeApi();
            if (response?.data?.success === true) {
                dispatch({
                    type: SIZES,
                    response: response?.data?.data
                })
            }
        }
    }


//FOR ADD PRODUCT TO WATCH LIST API

export  function addProductToWatchList(data) {
    return async function (dispatch) {
        const response = await addProductToWatchListApi(data);
        console.log('response', response)
        if (response?.data?.success === true) {
            dispatch({
                type: ADD_TO_WATCH_LIST,
                response: response?.data?.data
            })
        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }


    //FOR GET PRODUCT FROM WATCH LIST API

export  function fetchProductFromWatchList(data) {
    return async function (dispatch) {
        const response = await getProductFromWatchListApi(data);
        console.log('response', response)
        if (response?.data?.success === true) {
            dispatch({
                type: GET_ALL_PRODUCT_FROM_WATCH_LIST,
                response: response?.data?.data
            })
        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }

    //FOR REMOVE PRODUCT FROM WATCH LIST API

export  function removeProductFromWatchList(data) {
    return async function (dispatch) {
        const response = await removeProductFromWatchListApi(data);
        console.log('response', response)
        if (response?.data?.success === true) {
        toast.success(response?.data?.message, {  
            position: toast.POSITION.TOP_CENTER,
          })
          setTimeout(() => {
            
        dispatch(fetchProductFromWatchList())
            }, 200);

        }else{

            toast.error(response?.data?.message, {  
                position: toast.POSITION.TOP_CENTER,
              })
        }
    }
    }