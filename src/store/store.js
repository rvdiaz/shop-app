import { configureStore } from "@reduxjs/toolkit";
import products from "./products/products";
import cart from "./productsCart/productsCart";

const store=configureStore({
    reducer:{
        products:products.reducer,
        cart:cart.reducer
    }
})

export default store;