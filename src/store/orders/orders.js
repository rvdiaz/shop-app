import { createSlice } from "@reduxjs/toolkit";

const orders=createSlice({
    name:'orders',
    initialState:{
        orders:[]
    },
    reducers:{
        addOrder(state,value){
            state.orders.push(value.payload);
        }
    }
})

export const ordersActions=orders.actions;

export default orders;