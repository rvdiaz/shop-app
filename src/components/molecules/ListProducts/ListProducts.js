import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { CardProduct } from '../../atoms/Cards/CardProduct';
import { CartProduct } from '../../atoms/Cards/CartProduct';
import { ManageCardProduct } from '../../atoms/Cards/ManageCardProduct';

export const ListProducts = (props) => {
  const {products,type}=props;
  let productItems=<Text>Any products available</Text>;

  switch (type) {
    case 'allProducts':
      productItems= 
      <FlatList
      data={products}
      renderItem={prod=>{
        return (
        <CardProduct
            product={prod.item}
            key={prod.item.id}
          />
      )}}
    />
      break;
    case 'cartProducts':
      productItems= <FlatList
      data={products}
      renderItem={prod=>{
        return (
        <CartProduct
            product={prod.item}
            key={prod.item.id}
          />
      )}}
    />
    break;
    case 'manageProducts':
      productItems= 
      <FlatList
      data={products}
      renderItem={prod=>{
        return (
        <ManageCardProduct
            product={prod.item}
            key={prod.item.id}
          />
      )}}
    />
    break;
    default:
      break;
  }

  return (
    <View style={{
      width:'100%',
      flex:1
    }}>
      {productItems}
    </View>
  )
}
