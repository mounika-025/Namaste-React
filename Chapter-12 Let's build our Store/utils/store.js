import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";



const store =configureStore({
    reducer:{
        cart:cartSlice,
    },

});

export default store;





/**
 * Create store 
 * -configureStore()-RTK
 * 
 * Provide my store to app
 * -<Provider store={store}> -import from react-redux
 * 
 * Slice
 * -createSlice({
 *    name:"",
 *    initialState:
 *    reducers:{
 *       addItem:(state,action)=>{}
 *   }
 *  })
 * 
 *  export const {addItem}=cartSlice.actions
 * export default cartSlice.reducer
 * 
 * 
 * 
 * Put that slice into store
 *   -{
 *     reducer:{
 *       cart:catSlice,
 *        }}
 */