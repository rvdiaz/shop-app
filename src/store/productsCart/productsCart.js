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
        findById(state,id){
            /* console.log('sdsd');
            return state.productsCart.find((prod)=>prod==id.payload); */
        }
    }
})

export const cartActions=productsCart.actions;

export default productsCart;