import moment from 'moment/moment';
import React, { useId } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import getTotalPriceInCart from '../../helpers/getTotalPriceInCart';
import { ListProducts } from '../../components/molecules/ListProducts/ListProducts';
import { CartProductsComponent } from '../../components/organisms/CartProductsComponent/CartProductsComponent';
import { ordersActions } from '../../store/orders/orders';
import { cartActions } from '../../store/productsCart/productsCart';
import styles from '../../styles/theme'

export const Cart = () => {
  return (
   <CartProductsComponent/>
  )
}
