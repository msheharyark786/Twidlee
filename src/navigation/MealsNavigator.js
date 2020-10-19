import React from 'react';
import { Platform, View, Text } from 'react-native';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
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

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const ReserveNavigator = createStackNavigator(
  {
    Reservation: ReservationScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const HisNavigator = createStackNavigator(
  {
    History: HistoryScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const AccNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const DineNavigator = createStackNavigator(
  {
    Dine: DineScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const DeliveryNavigator = createStackNavigator(
  {
    Delivery: DeliveryScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

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

// const myTabs={
//   Dine: {
//     screen: DineNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
//       },
//       tabBarColor: Colors.accentColor,
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>Dine In</Text>
//         ) : (
//           'Dine'
//         )
//     }
//   },
//   Delivery: {
//     screen: DeliveryNavigator,
//     navigationOptions: {
//       tabBarIcon: tabInfo => {
//         return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
//       },
//       tabBarColor: Colors.accentColor,
//       tabBarLabel:
//         Platform.OS === 'android' ? (
//           <Text style={{ fontFamily: 'open-sans-bold' }}>Delivery</Text>
//         ) : (
//           'Delivery'
//         )
//     }
//   }
// };




const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: MealsNavigator,
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
      title:  'Favorites',
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
    MealsFavs: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
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



export default createAppContainer(MainNavigator);
