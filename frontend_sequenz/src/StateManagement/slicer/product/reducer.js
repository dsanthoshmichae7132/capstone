import { CATEGORIES, GET_ALL_PRODUCT_FROM_WATCH_LIST, LOADING,PRODUCT_DETAILS,PRODUCTS, SIZES } from "./type"

const initialState = {
    loading: false,
    products: {},
    categories: [],
    sizes: [],
    productDetails: {},
    getAllProductFromWatchList: []
} 
 

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case PRODUCTS:
            return {
                ...state,
                products: action.response,
            
            }
        case CATEGORIES:
            return {
                ...state,
                categories: action.response,
              
            }
        case SIZES:
            return {
                ...state,
                sizes: action.response,
               
            }
            case PRODUCT_DETAILS:
                return {
                    ...state,
                    productDetails: action.response,
                   
                }

                case GET_ALL_PRODUCT_FROM_WATCH_LIST:
                    return {
                        ...state,
                        getAllProductFromWatchList: action.response,
                       
                    }
            
        default:
            return state;
    }

 
}