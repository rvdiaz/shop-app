import React from 'react'
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux'
import { ListOrders } from '../../molecules/ListOrders/ListOrders';

export const OrdersComponent = () => {
    const orders=useSelector(state=>state.orders.orders);

  return (
    orders.length ?
    <ListOrders
        orders={orders}
    />
    :
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }}>
        <Text>Any orders available</Text>
    </View>
  )
}
