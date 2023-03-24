import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { ListProducts } from '../../components/molecules/ListProducts/ListProducts';
import styles from '../../styles/theme'

export const Cart = () => {
    const {container}=styles;
    const cartProducts=useSelector(state=>state.cart.products);

  return (
   <View
    style={
        container
    }
   >
    {cartProducts.length>0 ?
    <ListProducts products={cartProducts} type='cartProducts'/> 
    :
    <Text>Not items added to Cart</Text>
    }
    
   </View>
  )
}
