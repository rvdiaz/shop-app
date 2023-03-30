import { useSelector } from "react-redux"

const getProductById=(id)=>{
    const productsList=useSelector(state=>state.products.products);
    const product=productsList.find((item)=>item.id===id);
    return product;
}

export default getProductById;