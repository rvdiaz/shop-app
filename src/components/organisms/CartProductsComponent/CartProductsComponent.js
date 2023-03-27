import moment from 'moment';
import React, { useId } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTotalPriceInCart from '../../../helpers/getTotalPriceInCart';
import { ListProducts } from '../../molecules/ListProducts/ListProducts';
import styles from '../../../styles/theme';
import { ordersActions } from '../../../store/orders/orders';
import { cartActions } from '../../../store/productsCart/productsCart';

export const CartProductsComponent = () => {
    const {container}=styles;
    /* fetch here products from api */
    const cartProducts=useSelector(state=>state.cart.products);
    const totalPrice=getTotalPriceInCart(cartProducts);
    const orderId=useId();
    const dispatch=useDispatch();

  const handleAddOrder=()=>{
    const newOrder={
      id:orderId,
      products:cartProducts,
      totalPrice:totalPrice,
      date:moment().format('YYYY-MM-DD')
    }
    dispatch(ordersActions.addOrder(newOrder));
    dispatch(cartActions.emptyCart());
  } 

  return (
   <View
    style={
        container
    }
   >
    {cartProducts.length>0 ?
    <View style={{
      flex:1
    }}>
      <View style={stylesComponents.containerOrderAction}>  
        <Text>Total: {totalPrice}</Text>
        <Button title='Place Order' onPress={handleAddOrder}/>
      </View>
      <ListProducts products={cartProducts} type='cartProducts'/> 
    </View>
    :
    <Text>Not items added to Cart</Text>
    }    
   </View>
  )
}

const stylesComponents=StyleSheet.create({
    containerOrderAction:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:10
    }
  })