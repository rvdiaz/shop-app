import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Colors from '../../theme/colors';
import { useState } from 'react';
import getProductById from '../../helpers/getProductById';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../store/products/products';
import { ManagementFieldsComponent } from '../../components/organisms/ManagementFieldsComponent/ManagementFieldsComponent';

export const ProductManageEdition = () => {
    const route=useRoute();
    const {id}=route.params;
    const product=getProductById(id);
    const navigation=useNavigation();
    const dispatch=useDispatch();

    const initialState={
        'Title':product.title,
        'Price':''+product.price,
        'Description':product.description
    }

    const [valueForm, setValueForm] = useState(initialState);
    
    const handleSaved=()=>{
        dispatch(productsActions.updateProduct({
            id:id,
            ...valueForm
        }))
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={handleSaved}
                >
                    <Octicons name="check" size={24} color={Colors.primaryColor}/>
                </TouchableOpacity>
            )
        })
    }, [valueForm,handleSaved])
    
  return (
    <ManagementFieldsComponent
        valueForm={valueForm}
        setValueForm={setValueForm}
    />
  )
}

