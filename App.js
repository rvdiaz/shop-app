import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { CartNavigation } from './src/navigation/CartNavigation/CartNavigation';
import * as Font from 'expo-font'; 

import fonts from './src/theme/fonts';
import store from './src/store/store';

export default function App() {
  const [fontLoad, setfontLoad] = useState(false);
  const {types}=fonts;

  const loadFonts=async()=>{
    await Font.loadAsync({
      [types.robotoItalic.name]: types.robotoItalic.url,
      [types.robotoRegular.name]: types.robotoRegular.url
    });
  }

  useEffect(() => {
    loadFonts();
    setfontLoad(true);
  }, [])
  
  return (
    fontLoad && 
    <Provider store={store}>
      <CartNavigation/>
    </Provider>
  );
}

