import {createApi, fetchBaseQuery}  from "@reduxjs/toolkit/query/react"




export  const poductsApi = createApi({
    reducerPath:"poductsApi",
    tagTypes:['products'],
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints:(builder) =>({
         getAllProducts:builder.query({
            query:() => "/products",
            providesTags: (result) =>
                result
                  ? [ ...result.map(() => ({ type: 'products'})), { type: 'products'},]
                  : [{ type: 'products'}]
         }),
         addProducts:builder.mutation({
            query:(newData)=>({
                url:"/products",
                method:"post",
                body:newData
            }),
            invalidatesTags: ['products'],
         }),


         deleteProduct: builder.mutation({
            query: (id) => ({
              url: `products/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['products'],
          }),


    })
})
 
export const {useGetAllProductsQuery,useAddProductsMutation,useDeleteProductMutation} = poductsApi












