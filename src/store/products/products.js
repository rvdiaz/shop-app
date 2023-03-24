import { createSlice } from "@reduxjs/toolkit";

const products=createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{
        setProducts(state,value){
            state.products=[...value.payload];
        }
    }
})

export const productsActions=products.actions;

export default products;