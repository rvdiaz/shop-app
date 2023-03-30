import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import getProductById from '../../../helpers/getProductById';
import { ProductDetail } from '../../molecules/ProductDetail/ProductDetail';

export const ProductDetailComponent = () => {
    const route=useRoute();
    const navigation=useNavigation();
    const {id}=route.params;
    const product=getProductById(id);

    useEffect(()=>{
      navigation.setOptions({
        title:product.title
      })
    },[id,navigation])
 
  return (
    <View>
      <ProductDetail product={product}/>
    </View>
  )
}
