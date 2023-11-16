import { commonApiForAll } from ".."

let token = localStorage.getItem("token")


//FOR ALL PRODUCT API 
export async function postProductApi(data) {
   let response = await commonApiForAll({
      url: "product",
      method: "POST",
      body: {
         search: data?.search,
         category: data?.category,
         casual_wear : data?.casual_wear,
         design_by : data?.design_by,
         size : data?.size,
         price_start : data?.price_start,
         price_end : data?.price_end,
         sort_by : data?.sort_by,
         sort_action : data?.sort_action,

      }
   })
   return response
}


//FOR PRODUCT DETAILS API ( PRODUCT ID and PRODUCT NAME)
export async function getProductDetailsApi(data) {
   let response = await commonApiForAll({
      url: "product-detail",
      method: "GET",
      
     
   })
   return response
}

//FOR FTCHING ALL CATEGORY API
export async function getCategoryApi(data) {
   let response = await commonApiForAll({
      url: "category",
      method: "GET",
     
   })
   return response
}

//FOR FTCHING ALL SIZE API
export async function getSizeApi(data) {
   let response = await commonApiForAll({
      url: "size",
      method: "GET",
   
   })
   return response
}

//FOR ADD TO WATCH LIST API
export async function addProductToWatchListApi(data) {
   
   let response = await commonApiForAll({
      url: "add-watchlist",
      method: "POST",
      body: {
         product_id: data?.product_id,
         product_attr_id: data?.product_attr_id,
      },
      header:{
         "Authorization":`Bearer ${token}`
      }
   })
   return response
}


//FOR FETCH PRODUCT FORM WATCH LIST API
export async function getProductFromWatchListApi() {
   let response = await commonApiForAll({
      url: "get-product-from-watchlist",
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
} 


//FOR REMOVE PRODUCT FORM WATCH LIST API
export async function removeProductFromWatchListApi(data) {
   let response = await commonApiForAll({
      url: `remove-product-from-watchlist/${data}`,
      method: "GET",
      header:{
         Authorization:`Bearer ${token}`
      }
     
   })
   return response
}

//FOR COUPON API
export async function getCouponApi() {
   let response = await commonApiForAll({
      url: "coupon",
      method: "GET",
     
   })
   return response
}
