import React from 'react'
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux'
import { CardProduct } from '../../atoms/Cards/CardProduct';

export const ListProducts = (props) => {
  const products=props.products;
 
  return (
    <View style={{
      width:'100%',
      flex:1
    }}>
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
    </View>
  )
}
