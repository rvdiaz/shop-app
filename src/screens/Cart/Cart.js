import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { ListProducts } from '../../components/molecules/ListProducts/ListProducts';
import styles from '../../styles/theme'

export const Cart = () => {
    const {container}=styles;
    const cartProducts=useSelector(state=>state.cart.products);
    console.log(cartProducts);
  return (
   <View
    style={
        container
    }
   >
    {/* <ListProducts products={cartProducts}/> */}
   </View>
  )
}
