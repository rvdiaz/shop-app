import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsActions } from '../../../store/products/products';
import { ListProducts } from '../../molecules/ListProducts/ListProducts'

export const AllProductsComponent = () => {
    const dispatch=useDispatch();
    const setProducts=async()=>{
        try {
            const products=await axios({
                method:'get',
                url:'https://api.escuelajs.co/api/v1/products?offset=0&limit=10',
                headers: {
                    Accept: 'application/json',
                   'Content-Type': 'application/json'
                 }
            })
            dispatch(productsActions.setProducts(products.data));
        } catch (error) {
            console.log(error);
        }
    }

    const products=useSelector(state=>state.products.products);

    useEffect(() => {
     setProducts();
    }, [])
    
  return (
   <ListProducts products={products}/>
  )
}
