import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  NavigationContainer } from '@react-navigation/native';
import { CartNavigation } from '../CartNavigation/CartNavigation';
import { Orders } from '../../screens/Orders/Orders';
import { Ionicons } from '@expo/vector-icons';
import { ManagementNavigation } from '../ManagementNavigation/ManagementNavigation';

export const TabNavigation = () => {
    const Tab=createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='shop'
            headerShown={false}
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    switch (route.name) {
                        case 'Shop':
                            iconName=focused ? 'md-home': 'md-home-outline'
                            break;
                        case 'Orders':
                            iconName=focused ? 'person' : 'person-outline'
                            break;
                        default:
                            iconName=focused ? 'settings' : 'settings-outline'
                            break;
                    }
                    return <Ionicons name={iconName} color={color} size={size}/>
                },
                tabBarHideOnKeyboard:true
            })}
        >
            <Tab.Screen 
                name='Shop' 
                component={CartNavigation}
                options={{headerShown:false}} 
                />
            <Tab.Screen 
                name='Orders' 
                component={Orders} 
                />
            <Tab.Screen 
                name='Management' 
                component={ManagementNavigation}
                options={{headerShown:false}} 
                />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
