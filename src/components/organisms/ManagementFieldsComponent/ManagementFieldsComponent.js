import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { InputGroup } from '../../atoms/InputGroup/InputGroup'

export const ManagementFieldsComponent = (props) => {
    const {valueForm,setValueForm}=props;
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View
            style={styles.container}
        >
            <InputGroup 
                name='Title' 
                value={valueForm} 
                setValue={setValueForm}/>
            <InputGroup 
                keyboardType="numeric"
                name='Price' 
                value={valueForm} 
                setValue={setValueForm}/>
            <InputGroup 
                multiline
                name='Description' 
                value={valueForm} 
                setValue={setValueForm}/>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:10
    }
})
