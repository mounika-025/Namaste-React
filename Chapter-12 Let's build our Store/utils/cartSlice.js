import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{  //reducer function  state=> initial state , action=> data which is coming in
            state.items.push(action.payload) //does not returns anything

        },

        removeItem:(state,action)=>{
            state.items.pop();
        },

        clearCart:(state,action)=>{
            state.items=[];

        },
    },
})

//exporting actions and reducers

export const {addItem,removeItem,clearCart} =cartSlice.actions

export default cartSlice.reducer; //combines reducers and exports


//cartSlice have objects 

/*
cartSlice={
    actions:{
        addItem,
        removeItem,
        clearCart
    },
    reducer:reducers
}
*/