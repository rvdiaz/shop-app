import React, { useState } from 'react'
import { Button, Image, TouchableHighlight, View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/productsCart/productsCart';
import styles from '../../../styles/theme';
import { CardsContainer } from './CardsContainer';

export const CardProduct = (props) => {
    const dispatch=useDispatch();
    const {product}=props;
    const {images,price,title,description,id}=product;

    const {imageContainer,infoContainer,buttonContainer,descriptionContainer,priceText,titleText,descriptionText}=styles.cards;
    const [OpenDetail, setOpenDetail] = useState(false);
    
   /*  const inCart=dispatch(cartActions.findById(id)); */

    const handleAddCart=()=>{
        dispatch(cartActions.addProduct(product));
    }

    const handleDetail=()=>{
        setOpenDetail(!OpenDetail);
    }

  return (
   <CardsContainer>
        <TouchableHighlight
            style={imageContainer}
        >
            <Image 
                style={{
                    height:200
                }}
                source={{uri:images[0]}}/>
        </TouchableHighlight>
        <View
            style={{
                padding:15
            }}
        >
            <View
                style={infoContainer}
                >
                    <Text
                        style={titleText}
                    >{title}</Text>
                    <Text
                        style={priceText}
                    >{price}</Text>
                </View>
            <View
                style={buttonContainer}
            >
                <Button 
                    title={OpenDetail ? 'Less' : 'More'}
                    onPress={handleDetail}
                    />
                <Button 
                    title='Add to Cart'
                    onPress={handleAddCart}
                    />
            </View>
            {
                OpenDetail && <View
                style={descriptionContainer}
                >
                <Text
                    style={descriptionText}
                >
                    {description}
                </Text>
                </View>
            }
        </View>
    </CardsContainer>
  )
}

