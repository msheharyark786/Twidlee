import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import MealsNavigator from './src/navigation/MealsNavigator';
// const store = createStore(rootReducer);
import productsReducer from './src/store/reducers/products';
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';
import CartCounter from './src/store/reducers/CartCounter';
//import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({ 
  
  products: productsReducer,
  CartCounter: CartCounter,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);

// useScreens();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
 
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }
 // <MealsNavigator />

  return <Provider store={store}>
    <MealsNavigator /> 
    </Provider>

{/* <ShopNavigator /> */}
}
