import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, TextInput, View } from 'react-native'
import Colors from '../../../theme/colors';

export const InputGroup = (props) => {
    const {name,value,setValue}=props;
    
    const handleChange=(currentValue)=>{
        setValue({
            ...value,
            [name]:currentValue
        });
    }

  return (
    <View
        style={styles.container}
    >
        <Text
            style={styles.title}
        >{name}</Text>
        <TextInput
            {...props}
            placeholder={name}
            value={value[name]}
            onChangeText={handleChange}
            style={styles.input}
        />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:10
    },
    title:{
        fontSize:17,
        fontWeight:700,
        marginBottom:10
    },
    input:{
        fontSize:15,
        borderWidth:1,
        borderColor:Colors.borderColor,
        padding:10
    }
})