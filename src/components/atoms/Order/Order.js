import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import cardsStyles from '../../../styles/theme';
import Colors from '../../../theme/colors';

export const Order = (props) => { 
    const {products,totalPrice,date}=props.order;
    const [showInfo, setshowInfo] = useState(false);
    const {cards}=cardsStyles;

    const handleToggleInfo=()=>{
        setshowInfo(!showInfo);
    }

  return (
   <View
        style={{
            ...cards.cardContainer,
            margin:10,
            padding:10
        }}
   >
        <View
            style={styles.header}
        >
            <Text>Total Price: ${totalPrice}</Text>
            <View>
            <Text>{date}</Text>
            <Button title={!showInfo ? 'More' : 'Less'} onPress={handleToggleInfo}/>
            </View>
            
        </View>
        {
        showInfo &&
        <View>
        {products.map(({product,quantity})=>(
            <View
                key={product.id}
                style={styles.bodyInfo}
            >
                <Text>{quantity}</Text>
                <Text>{product.title}</Text>
                <Text>${product.price}</Text>
            </View>
        ))}
        </View>
        }
   </View>
  )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:Colors.borderColor,
        padding:5
    },
    bodyInfo:{
        width:'100%',
        flexDirection:'row',
        padding:5,
        justifyContent:'space-between'
    }
})