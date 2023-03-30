import React from 'react'
import { Text, View } from 'react-native'
import { AllProductsComponent } from '../../components/organisms/AllProductsComponent/AllProductsComponent'
import styles from '../../styles/theme'

export const AllProducts = () => {
    const {container}=styles;

  return (
    <View
        style={
            container
        }
    >
        <AllProductsComponent type='allProducts'/>
    </View>
  )
}
