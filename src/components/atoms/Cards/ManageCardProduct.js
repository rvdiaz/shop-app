import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native';
import { Button, Image, View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { productsActions } from '../../../store/products/products';
import styles from '../../../styles/theme';
import { CardsContainer } from './CardsContainer';

export const ManageCardProduct = (props) => {
    const dispatch=useDispatch();
    const {product}=props;

    const {images,price,title,description,id}=product;
    const navigation=useNavigation();
    
    const {infoContainer,buttonContainer,descriptionContainer,priceText,titleText,descriptionText}=styles.cards;
    const [OpenDetail, setOpenDetail] = useState(false);

    const handleDetail=()=>{
        setOpenDetail(!OpenDetail);
    }
    const handleEdit=()=>{
        navigation.navigate('Edit Product',{
            id:id
        })
    }
    const handleAlert=()=>{
       Alert.alert('Are you sure','',[
        {
            text:'Yes',
            onPress:()=>{
                dispatch(productsActions.deleteProduct(id));
            }
        },
        {
            text:'No'
        }
       ])
    }

  return (
   <CardsContainer>
        <Image 
            style={{
                height:200
            }}
            source={{uri:images && images[0]}}/>
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
                    >${price}</Text>
                </View>
            <View
                style={buttonContainer}
            >
                <Button 
                    title={OpenDetail ? 'Less' : 'More'}
                    onPress={handleDetail}
                    />
                    <View style={styleUi.buttonCardContainer}>
                        <Button 
                            title='Edit'
                            onPress={handleEdit}
                        />
                        <Button 
                            title='Delete'
                            onPress={handleAlert}
                        />
                    </View>
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

const styleUi=StyleSheet.create({
    buttonCardContainer:{
        width:'40%',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})