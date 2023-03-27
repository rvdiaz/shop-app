import { configureStore } from "@reduxjs/toolkit";
import orders from "./orders/orders";
import products from "./products/products";
import cart from "./productsCart/productsCart";

const store=configureStore({
    reducer:{
        products:products.reducer,
        cart:cart.reducer,
        orders:orders.reducer
    }
})

export default store;