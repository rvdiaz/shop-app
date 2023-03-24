import * as Font from 'expo-font'; 

const customFontHook=async (type,url,fontUpload)=>{
    await Font.loadAsync({
        [type]: url
    });
    fontUpload(true);
}

export default customFontHook;