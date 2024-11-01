import { configureStore } from "@reduxjs/toolkit";
import { poductsApi } from "./productsApi";



export const store = configureStore({
    reducer:{
        [poductsApi.reducerPath]:poductsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(poductsApi.middleware)
})



