import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/productsCart/productsCart';
import styles from '../../../styles/theme';

export const ProductDetail = (props) => {
  const {images,title,price,description}=props.product;
  const {buttonContainer,descriptionContainer,priceText,titleText,descriptionText}=styles.cards;
  const dispatch=useDispatch();

  const handleAddCart=()=>{
    dispatch(cartActions.addProduct(props.product));
}
  return (
    <View>
        <Image
            source={{uri: images[0]}}
            style={{
                height:250
            }}
        />
        <View
            style={stylesUi.infoContainer}
            >
                <Text
                    style={titleText}
                >{title}</Text>
                <Text
                    style={priceText}
                >${price}</Text>
        </View>
        <View
            style={{...buttonContainer,margin:10}}
        >
            <Button 
                title='Add to Cart'
                onPress={handleAddCart}
                />
        </View>
           <View
            style={{descriptionContainer,margin:10}}
            >
                <Text
                    style={descriptionText}
                >
                    {description}
                </Text>
            </View>
    </View>
  )
}

const stylesUi=StyleSheet.create({
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    }
})

