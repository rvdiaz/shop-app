import moment from 'moment'
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { OrdersComponent } from '../../components/organisms/OrdersComponent/OrdersComponent'
import {container} from '../../styles/theme'

export const Orders = () => {
  return (
    <View style={container}>
        <OrdersComponent/>
    </View>
  )
}
