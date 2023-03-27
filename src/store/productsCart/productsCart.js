import { createSlice } from "@reduxjs/toolkit";
import products from "../products/products";

const productsCart=createSlice({
    name:'productCart',
    initialState:{
        products:[]
    },
    reducers:{
        addProduct(state,value){
            const index=state.products.findIndex((item)=>item.product.id==value.payload.id);
            if(index != -1){
                state.products[index]={
                    ...state.products[index],
                    quantity:state.products[index].quantity+1
                }
            }   
            else {
                state.products.push({
                    product:value.payload,
                    quantity:1
                })
            }
        },
        deleteProduct(state,id){
            const newArray=state.products.filter((item)=>item.product.id!=id.payload);
            state.products=[...newArray];
        },
        emptyCart(state){
            state.products=[];
        }
    }
})

export const cartActions=productsCart.actions;

export default productsCart;