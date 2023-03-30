import React from 'react'
import { View } from 'react-native'
import { AllProductsComponent } from '../../components/organisms/AllProductsComponent/AllProductsComponent';
import styles from '../../styles/theme'

export const AdministrationProducts = () => {
  const {container}=styles;
  return (
  <View
    style={
        container
    }
    >
    <AllProductsComponent type='manageProducts'/>
  </View>
  )
}
