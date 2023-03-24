import React from 'react'
import { View } from 'react-native'
import styles from '../../../styles/theme';

export const CardsContainer = (props) => {
    const {cardContainer}=styles.cards;
  return (
    <View 
        style={cardContainer}>
            {props.children}
    </View>
  )
}
