import React from 'react'
import { Button, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const ButtonDefault = (props) => {
    const {title,onPress,style}=props;
  return (
    <Button
        title={title}
        onPress={()=>{
            onPress();
        }}
        style={{...style}}
    />
  )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:Colors.primaryColor
    }
})