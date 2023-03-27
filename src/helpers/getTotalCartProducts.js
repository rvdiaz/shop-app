const getTotalCartProducts=(array)=>{
    let sum=0;
    array.map((item)=>{
        sum+=item.quantity;
    })
    return sum;
}

export default getTotalCartProducts;