import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Order } from '../../atoms/Order/Order';

export const ListOrders = (props) => {
    const {orders}=props;
  return (
    <View
        style={{
            height:'100%'
        }}
    >
        <FlatList
            data={orders}
            renderItem={(order)=>(
            <Order
                order={order.item}
                key={order.item.id}
            /> 
            )}
        />
    </View>
  )
}
