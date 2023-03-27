const getTotalPriceInCart=(products)=>{
    let sum=0;
    products.map((item)=>{
        sum+=(item.product.price)*item.quantity;
    })
    return sum;
}

export default getTotalPriceInCart;