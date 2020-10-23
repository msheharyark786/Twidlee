import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
//import MyNavigator from './MyNavigator';
import {  
  createAppContainer
  
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import DineScreen from '../screens/DineScreen';
import Colors from '../constants/Colors';
import TandoorScreen from '../screens/TandoorScreen';
import ChineseScreen from '../screens/ChineseScreen';
import DealScreen from '../screens/DealScreen';
import PakistaniScreen from '../screens/PakistaniScreen';
import BbqScreen from '../screens/BbqScreen';




    const defaultStackNavOptions = {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerBackTitleStyle: {
          //fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? Colors.themeColor : Colors.primaryColor,
        headerTitle: 'A Screen'
      };
    const DealNavigator = createStackNavigator(
        {
           // Deal: DealScreen
            // Categories: {
            //     screen: CategoriesScreen
            //   },
            CategoryMeals: {
                screen: CategoryMealsScreen
            },
            MealDetail: MealDetailScreen,
            Pakistani: PakistaniScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const PakNavigator = createStackNavigator(
        {
            Pakistani: PakistaniScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      
      const BbqNavigator = createStackNavigator(
        {
          Bbq: BbqScreen,
          //MealDetail: MealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const ChineseNavigator = createStackNavigator(
        {
            Chinese: ChineseScreen,
          //MealDetail: MealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const TandoorNavigator = createStackNavigator(
        {
            Tandoor: TandoorScreen,
          //MealDetail: MealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOptions
        }
      );
      const ChooseNavigator = createMaterialTopTabNavigator(  
          {
            Deal: {
                screen: DealNavigator,
                navigationOptions: {
                  tabBarIcon: tabInfo => {
                    // return <MaterialCommunityIcons name="account" size={24} color={tabInfo.tintColor} />;
                  },
                  tabBarColor: Colors.accentColor,
                  tabBarLabel:
                    Platform.OS === 'android' ? (
                      <Text>Deal</Text>
                    ) : (
                      'Deal'
                    )
                }
              },
          Pakistani: {
            screen: PakNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{ fontFamily: 'open-sans-bold' }}>Desi</Text>
                ) : (
                  'Pakistani'
                )
            }
          },
          Bbq: {
            screen: BbqNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{ fontFamily: 'open-sans-bold' }}>Bbq</Text>
                ) : (
                  'Bbq'
                )
            }
          },
          Chinese: {
            screen: ChineseNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{ fontFamily: 'open-sans-bold' }}>Chinese</Text>
                ) : (
                  'Chinese'
                )
            }
          },
          Tandoor: {
            screen: TandoorNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{ fontFamily: 'open-sans-bold' }}>Tandoor</Text>
                ) : (
                  'Tandoor'
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
          initialRouteName: 'Deal',
          tabBarOptions: {
              //labelPosition: 'b',
            //   labelStyle:{
            //     color:Colors.themeColor,
            //     fontSize:30
            //   },
              activeTintColor: Colors.accentColor,
              inactiveTintColor: Colors.themeColor,
              // font: 'open-sans',
              fontWeight:'bold',
              style: {
                height: 50,
                // Colors:Colors.accentColor,
                backgroundColor: Colors.primaryColor,
               }
            },
        } 
        
    );
    const MenuNavigator = createDrawerNavigator(
          {
           Favs:{
                screen: ChooseNavigator,
                navigationOptions: {
                  drawerLabel: 'Deal'
                }
              }
          },
          {
            contentOptions: {
              activeTintColor: Colors.accentColor,
              labelStyle: {
                fontWeight:'bold',
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

export default createAppContainer(MenuNavigator);
