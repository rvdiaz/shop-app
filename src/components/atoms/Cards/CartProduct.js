import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/productsCart/productsCart';

export const CartProduct = (props) => {
    const {product,quantity}=props.product;
    const {price,title,id}=product;
    const dispatch=useDispatch();

    const handleDelete=()=>{
        dispatch(cartActions.deleteProduct(id));
    }

  return (
    <View
        style={styles.container}
    >
        <Text>{quantity}</Text>
        <View
            style={{
                width:'60%'
            }}
        >
            <Text
                numberOfLines={1}
                ellipsizeMode='tail'
            >{title}</Text>
        </View>
        <Text>{price}</Text>
        <TouchableOpacity
            onPress={handleDelete}
            >
            <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    }
})