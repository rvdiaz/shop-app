import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AdministrationProducts } from "../../screens/AdministrationProducts/AdministrationProducts";
import { ProductManageEdition } from "../../screens/ProductManageEdition/ProductManageEdition";
import { AntDesign } from '@expo/vector-icons';
import { ProductManagementAddition } from "../../screens/ProductManagementAddition/ProductManagementAddition";
import Colors from "../../theme/colors";

export const ManagementNavigation=()=>{

const Stack=createNativeStackNavigator();

return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Administration Product' 
            component={AdministrationProducts}
            options={({navigation})=>({
                headerRight:()=>(
                <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={()=>{
                        navigation.navigate('Add Product');
                    }}
                >
                    <AntDesign name="plus" size={24} color={Colors.primaryColor} />
                </TouchableOpacity> 
                )
            })
        }
            />
        <Stack.Screen 
            name='Edit Product' 
            component={ProductManageEdition}/>
        <Stack.Screen 
            name='Add Product' 
            component={ProductManagementAddition}/>
    </Stack.Navigator>
)

}