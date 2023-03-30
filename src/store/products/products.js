import { createSlice } from "@reduxjs/toolkit";

const products=createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{
        setProducts(state,value){
            state.products=[...value.payload];
        },
        deleteProduct(state,id){
            state.products=state.products.filter((prod)=>prod.id!==id.payload);
        },
        addProduct(state,value){
            state.products=[value.payload].concat(state.products);
        },
        updateProduct(state,value){
            state.products.map((prod)=>{
                if(prod.id===value.payload.id){
                    prod.title=value.payload.Title;
                    prod.price=value.payload.Price;
                    prod.description=value.payload.Description
                }
            })
        }
    }
})

export const productsActions=products.actions;

export default products;