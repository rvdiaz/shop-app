import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, TouchableOpacity } from 'react-native';
import { AllProducts } from '../../screens/AllProducts/AllProducts';
import { Cart } from '../../screens/Cart/Cart';
import { AntDesign } from '@expo/vector-icons';

export const CartNavigation = () => {
    const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="allProducts"
            headerShown={false}
        >
            <Stack.Screen 
              name="allProducts" 
              component={AllProducts}
              options={({navigation})=>({
                headerRight:({})=>{
                  return <TouchableOpacity
                      onPress={()=>{
                        navigation.navigate('cart');
                      }}
                    >
                      <AntDesign name="shoppingcart" size={24} color="black" />
                  </TouchableOpacity>
                }
              })}
              />
            <Stack.Screen name="cart" component={Cart}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
