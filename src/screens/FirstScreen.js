import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import SecondTopScreen from '../screens/SecondTopScreen';
import DineScreen from '../screens/DineScreen';
import HeaderButton from '../components/HeaderButton'; 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import HeaderIamge from '../components/HeaderImage';
//import DesiScreen from '../screens/DesiScreen';




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
        headerTitle: '',
      };
    const DineNavigator = createStackNavigator(
        {
            Dine: DineScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
    //   const SecondTopNavigator = createStackNavigator(
    //     {
    //         SecondTop: SecondTopScreen,
          
    //       //MealDetail: MealDetailScreen
    //     },
    //     {
    //       // initialRouteName: 'Categories',
    //       defaultNavigationOptions: defaultStackNavOptions
    //     }
    //   );
      
      const DeliveryNavigator = createStackNavigator(
        {
          //Delivery: DeliveryScreen,
          //MealDetail: MealDetailScreen,
        //   SecondTop:SecondTopScreen,
        //   Pakistani: PakistaniScreen,
          Categories: {
            screen: CategoriesScreen
          },
        //   SecondTop:{
        //     screen: SecondTopScreen
        //   },
        //   CategoryMeals: {
        //     screen: CategoryMealsScreen
        //   },
        //   MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const AppNavigator = createMaterialTopTabNavigator(  
          {
            Delivery: {
                screen: DeliveryNavigator,
                navigationOptions: {
                  tabBarIcon: tabInfo => {
                    // return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
                  },
                  tabBarColor: Colors.accentColor,
                  tabBarLabel:
                    Platform.OS === 'android' ? (
                      <Text style={{ fontWeight: 'bold', fontSize:20  }}>Delivery</Text>
                    ) : (
                      'Delivery'
                    )
                }
              },
          Dine: {
            screen: DineNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{ fontWeight: 'bold', fontSize:20 }}>Dine In</Text>
                ) : (
                  'Dine'
                )
            }
          }
          
        },
        {  
          // tabBarOptions: {  
          //     activeTintColor: 'white',  
          //     showIcon: true,  
          //     showLabel:false,  
          //     style: {  
          //         backgroundColor:'red'  
          //     }  
        //   },  
          initialRouteName: 'Delivery',
          tabBarOptions: {
              //labelPosition: 'b',
              labelStyle:{
                color:Colors.themeColor,
                fontSize:30
              },
              activeTintColor: Colors.accentColor,
              inactiveTintColor: Colors.themeColor,
              // font: 'open-sans',
              // fontFamily: 'open-sans-bold',
              style: {
                height: 50,
                // Colors:Colors.accentColor,
                backgroundColor: Colors.primaryColor,
               }
            },
        } 
        
    );
    const MinNavigator = createDrawerNavigator(
          {
            TopFavs:{
                screen: AppNavigator,
                navigationOptions: {
                  drawerLabel: 'Delivery',
                  // title: '',
                  // headerShown: false,
                  // headerMode: 'none'
                }
              }
          },
          {
            contentOptions: {
              activeTintColor: Colors.accentColor,
              labelStyle: {
                //fontWeight:'bold'
              }
            }
          }
    );
    // return (
    //     <View style={styles.HomeView}>
    //         <Text>Home Screen</Text>
    //     </View>
    // )
// }

// const styles = StyleSheet.create({
//     HomeView:{
//         justifyContent:'center',
//         fontSize:20
//     }
// })
// const FirstScreen=(props)=>{

// }
// FirstScreen.navigationOptions = navData => {
//     return {
//       headerTitle: 'Meal Categories',
//       headerLeft:()=>(
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Menu"
//             iconName="ios-menu"
//             onPress={() => {
//               navData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       )
//     };
//   };

export default createAppContainer(MinNavigator);
