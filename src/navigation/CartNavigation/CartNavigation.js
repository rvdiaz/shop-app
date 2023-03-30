import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { AllProducts } from '../../screens/AllProducts/AllProducts';
import { Cart } from '../../screens/Cart/Cart';
import { AntDesign } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';
import getTotalCartProducts from '../../helpers/getTotalCartProducts';
import { useSelector } from 'react-redux';
import { ProductSingle } from '../../screens/ProductSingle/ProductSingle';

export const CartNavigation = () => {
    const Stack=createNativeStackNavigator();
    const products=useSelector(state=>state.cart.products);
    const totalProducts=getTotalCartProducts(products);

  return (
    <Stack.Navigator
        initialRouteName="allProducts"
        headerShown={false}
    >
        <Stack.Screen 
          name="allProducts" 
          component={AllProducts}
          options={({navigation})=>({
            headerRight:()=>{
              return <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate('cart');
                  }}
                >
                  <AntDesign name="shoppingcart" size={24} color="black" />
                  <Badge
                    status="primary"
                    containerStyle={{ position: 'absolute', top: -4, right: -10 }}
                    value={totalProducts}
                    textStyle={{
                      fontSize:12
                    }}
                    badgeStyle={{
                      padding:1,
                      height:'auto'
                    }}
                  />
              </TouchableOpacity>
            }
          })}
          />
        <Stack.Screen
          name="ProductDetail"
          component={ProductSingle}
        />
        <Stack.Screen 
          name="cart" 
          component={Cart}
          />
    </Stack.Navigator>
  )
}
