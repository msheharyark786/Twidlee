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
import PakistaniScreen from '../screens/PakistaniScreen';
import BbqScreen from '../screens/BbqScreen';
//import Forms from '../components/Forms';


import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/signUp';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';

import Colors from '../constants/Colors';


 
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    //fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    //fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
  headerTitle: 'A Screen'
};

// const MealsNavigator = createStackNavigator(
//   {
//     // Categories: {
//     //   screen: CategoriesScreen
//     // },
//     // CategoryMeals: {
//     //   screen: CategoryMealsScreen
//     // },
//     First: {
//       screen:FirstScreen
//     },
//      MealDetail: MealDetailScreen
//   },
//   {
//     // initialRouteName: 'Categories',
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FirstNavigator = createStackNavigator(
  {
    First: {
      screen:FirstScreen
    },
    SecondTop:{
      screen: SecondTopScreen
    },
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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const HisNavigator = createStackNavigator(
  {
    History: HistoryScreen,
   // MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const AccNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    //MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// const DineNavigator = createStackNavigator(
//   {
//     // Dine: DineScreen,
//     Categories: {
//         screen: CategoriesScreen
//       },
//       CategoryMeals: {
//         screen: CategoryMealsScreen
//       },
//       MealDetail: MealDetailScreen
//     //MealDetail: MealDetailScreen
//   },
//   {
//     // initialRouteName: 'Categories',
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

// const DeliveryNavigator = createStackNavigator(
//   {
//     Delivery: DeliveryScreen,
//     //MealDetail: MealDetailScreen
//   },
//   {
//     // initialRouteName: 'Categories',
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

// const tabScreenConfig = {
//   Home: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return (
//           <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//         );
//       },
//       tabBarColor: Colors.primaryColor,
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>Home</Text>
//         ) : (
//           'Meals'
//         )
//     }
//   },
//   Reservations: {
//     screen: ReserveNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <SimpleLineIcons name="present" size={24} color={tabInfo.tintColor} />;
        
//       },
      
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>Reservations</Text>
//         ) : (
//           'Reservation'
//         )
//     }
    
//   },
//   History: {
//     screen: HisNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <MaterialIcons name="history" size={24} color={tabInfo.tintColor} />;
//       },
//       //tabBarColor: Colors.accentColor,
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>History</Text>
//         ) : (
//           'History'
//         )
//     }
//   },
//   Favorites: {
//     screen: FavNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <MaterialIcons name="favorite" size={24} color={tabInfo.tintColor} />;
//       },
//       tabBarColor: Colors.accentColor,
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
//         ) : (
//           'Favorites'
//         )
//     }
//   },
//   Account: {
//     screen: AccNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
//       },
//       //Color: 'red',
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold', color:'red' }}>Account</Text>
//         ) : (
//           'Account'
//         )
//     }
//   }
// };






const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: FirstNavigator,
    navigationOptions: ({tintColor}) => ({
      title:  'Home',
      tabBarIcon: <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'ios-restaurant'} size={25}
      color={tintColor} />,
     // tabBarLabel:<Text style={{ fontFamily: 'open-sans-bold', color:Colors.accentColor }}>Home</Text>
    }),
    },
  Reservations: { 
    screen: ReserveNavigator,
    navigationOptions: ({tintColor}) => ({
      title:  'Reservation',
      tabBarIcon: <SimpleLineIcons name="present" size={25} 
      
      color={tintColor} />,
    }),
  },
  History: { 
    screen: HisNavigator,
    navigationOptions: ({tintColor}) => ({
      title:  'History',
      tabBarIcon: <MaterialIcons name={Platform.OS === 'ios' ? 'ios-calendar' : 'history'} size={25}
      color={tintColor} />,
    }),
  },
  Favorites: { 
    screen: FavNavigator,
    navigationOptions: ({tintColor}) => ({
      title:  'Favoritesh',
      tabBarIcon: <MaterialIcons name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'favorite'} size={25} color={tintColor}  />,
    }),
  },
  Account: { 
    screen: AccNavigator,
    navigationOptions: ({tintColor}) => ({
      title:  'Account',
      tabBarIcon: <MaterialCommunityIcons name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'account'} size={25} color={tintColor}  />,
    }),
 }
  
},
{
  initialRouteName: 'Home',
  tabBarOptions: {
      labelPosition: 'below-icon',
      labelStyle: { fontSize: 13 },
      activeTintColor: Colors.accentColor,
      inactiveTintColor: Colors.themeColor,
      // font: 'open-sans',
      // fontFamily: 'open-sans-bold',
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
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: '',
        headerShown: false,
      }},
      LoginScreen:{
        screen: LoginScreen,
        navigationOptions: {
        title: '',
        headerShown: false,
        headerMode: 'none'
      }},
      SignupScreen:{
        screen: SignupScreen,
        navigationOptions: {
        title: '',
        headerShown: false,
        headerMode: 'none'
      }},
    MealsFavs: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    // TopFavs:{
    //     screen: AppNavigator,
    //     navigationOptions: {
    //       drawerLabel: 'Home'
    //     }
    //   },
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
      activeTintColor: Colors.accentColor,
      labelStyle: {
        //fontFamily: 'open-sans-bold'
      }
    }
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
