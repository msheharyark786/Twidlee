import React from 'react';
import { Platform, View, Text } from 'react-native';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ReservationScreen from '../screens/ReservationScreen';
import FiltersScreen from '../screens/FiltersScreen';
import DineScreen from '../screens/DineScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

import ProfileScreen from '../screens/ProfileScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import AddressScreen from '../screens/AddressScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import My_OrderScreen from '../screens/My_OrderScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermConditionScreen from '../screens/TermConditionScreen';
import FirstScreen from '../screens/FirstScreen';
import AuthScreen from '../screens/AuthScreen';
import SecondTopScreen from '../screens/SecondTopScreen';
import TandoorScreen from '../screens/TandoorScreen';
import ChineseScreen from '../screens/ChineseScreen';
import DealScreen from '../screens/DealScreen';
import Desi from '../screens/DesiScreen';
import BbqScreen from '../screens/BbqScreen';
import Header from '../components/Header';
import PaymentScreen from '../screens/PaymentScreen';
import DesiMealDetailScreen from '../screens/DesiMealDetailScreen'
//import Forms from '../components/Forms';
import HeaderButton from '../components/HeaderButton'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/signUp';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import HeaderIamgeScreen from '../screens/HeaderImageScreen';


import Colors from '../constants/Colors';
import ImageAnimationScreen from '../screens/ImageAnimationScreen';
//import { Header } from 'react-native/Libraries/NewAppScreen';


 
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    
  },
  headerTitleStyle: {
    //fontFamily: 'open-sans-bold',
    //paddingLeft:105,
    alignContent:'center',
    fontWeight:'bold',
    //justifyContent:'space-between'
  },
  headerBackTitleStyle: {
    //fontFamily: 'open-sans',
    //paddingLeft:100,
  },
  
  headerTitle: 'Restaurants',
    headerLeft:()=>(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            //navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
  
};


const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);

const FirstNavigator = createStackNavigator(
  {
    

    First: {
      navigationOptions: {
        // title: '',
        // headerShown: false,
      },
      screen:FirstScreen
       
    },
    // HeaderIamgeScreen: {
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   },
    //   screen: HeaderIamgeScreen,
    // },
    ImageAnimationScreen:{
      screen: ImageAnimationScreen,
    },
    // SecondTop:{
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   },
    //   screen: SecondTopScreen
    // },
    // CategoryMeals: {
    //   screen: CategoryMealsScreen
    // },
    // MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const ReserveNavigator = createStackNavigator(
  {
    Reservation: ReservationScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);

const HisNavigator = createStackNavigator(
  {
    History: HistoryScreen,
   // MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);

const AccNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);






const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: FirstNavigator,
    navigationOptions : {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused, tintColor }) => (
          <Icon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'ios-restaurant'}
              style={{ fontSize:27, color: tintColor }}
          />
      )}
  },
  Reservations: { 
    screen: ReserveNavigator,
    navigationOptions : {
      tabBarLabel: 'Reservation',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'bookmarks'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  History: { 
    screen: HisNavigator,
    navigationOptions : {
      tabBarLabel: 'History',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'history'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  Favorites: { 
    screen: FavNavigator,
    navigationOptions : {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'favorite'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  },
  Account: { 
    screen: AccNavigator,
    navigationOptions : {
      tabBarLabel: 'Account',
      tabBarIcon: ({focused, tintColor }) => (
          <MaterialCommunityIcons
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-home' : 'account'}
              style={{ fontSize:30, color: tintColor }}
  
          />
      )}
  }
  
},
{
  initialRouteName: 'Home',
  tabBarOptions: {
      activeTintColor: Colors.accentColor,
      inactiveTintColor: Colors.themeColor,
      labelPosition: 'below-icon',
      labelStyle: { fontSize: 11,fontWeight:"bold" },
      //swipeEnabled:true,
      fontWeight:'bold',
      style: {
        height: 50,
        backgroundColor: Colors.primaryColor,
       }
    },
  });






// const MealsFavTabNavigator =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: 'red',
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primaryColor
//         }
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           labelStyle: {
//             fontFamily: 'open-sans'
//           },
//           activeTintColor: Colors.accentColor
//         }
//       });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    navigationOptions: {
      drawerLabel: 'Filters!!!!'
    },
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator(
  {
    // SplashScreen: {
    //   screen: SplashScreen,
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   }},
    //   LoginScreen:{
    //     screen: LoginScreen,
    //     navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //     headerMode: 'none'
    //   }},
    //   SignupScreen:{
    //     screen: SignupScreen,
    //     navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //     headerMode: 'none'
    //   }},
    MealsFavs: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
        title: '',
        headerShown: false,
        headerMode: 'none'
      }
    },
    Filters: FiltersNavigator,
    Profile: ProfileScreen,
    AboutUs: AboutUsScreen,
    Address: AddressScreen,
    ChangePassword: ChangePasswordScreen,
    My_Order: My_OrderScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermCondition: TermConditionScreen
    //Forms: Forms
    
},
  {
    contentOptions: {
      //color:'White'
      iconContainerStyle: {
        opacity: 1,
      },
    },
    //drawerBackgroundColor: '#262A2C',
  }
);

// const MiniNavigator = createDrawerNavigator(
//   {
//     TopFavs:{
//         screen: AppNavigator,
//         navigationOptions: {
//           drawerLabel: 'Dine'
//         }
//       }
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.accentColor,
//       labelStyle: {
//         //fontFamily: 'open-sans-bold'
//       }
//     }
//   }
//   // {

//   // }
//   );

export default createAppContainer(MainNavigator);
