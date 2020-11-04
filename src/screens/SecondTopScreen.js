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
import BbqMealDetailScreen from '../screens/BbqMealDetailScreen';
import ChineseMealDetailScreen from '../screens/ChineseMealDetailScreen';
import TandoorMealDetailScreen from '../screens/TandoorMealDetailScreen';
import DesiMealDetailScreen from '../screens/DesiMealDetailScreen';
import DineScreen from '../screens/DineScreen';
import Colors from '../constants/Colors';
import TandoorScreen from '../screens/TandoorScreen';
import ChineseScreen from './ChineseScreen';
import DealScreen from '../screens/DealScreen';
import DesiScreen from './DesiScreen';
import BbqScreen from '../screens/BbqScreen';
import HeaderIamge from '../components/HeaderImage';
import PaymentScreen from '../screens/PaymentScreen'




    const defaultStackNavOption = {
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
        headerTitle: ''
      };
    const DealNavigator = createStackNavigator(
        {
           // Deal: DealScreen
            // Categories: {
            //     screen: CategoriesScreen
            //   },
            //HeaderIm: HeaderIamge,
            
            CategoryMeals: {
                screen: CategoryMealsScreen,
                navigationOptions: {
                  title: '',
                  headerShown: false,
                },
            },
            MealDetail: MealDetailScreen,
            PaymentScreen: PaymentScreen
            //Pakistani: PakistaniScreen,
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          //defaultNavigationOptions: defaultStackNavOption
        }
      );
      const DesiNavigator = createStackNavigator(
        {
          Desi: {
            screen: DesiScreen,
            navigationOptions: {
                  title: '',
                  headerShown: false,
                },
          },
          DesiMealDetail: DesiMealDetailScreen
            
          
          //MealDetail: MealDetailScreen
        },
        {
          // initialRouteName: 'Categories',
          //defaultNavigationOptions: defaultStackNavOption
        }
      );
      
      const BbqNavigator = createStackNavigator(
        {
          Bbq: {
            screen:BbqScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            },
          },
          BbqMealDetailScreen: BbqMealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      const ChineseNavigator = createStackNavigator(
        {
            Chinese: {
              screen: ChineseScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
            ChineseMealDetailScreen: ChineseMealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOption
        }
      );
      const TandoorNavigator = createStackNavigator(
        {
            Tandoor: {
              screen: TandoorScreen,
              navigationOptions: {
                title: '',
                headerShown: false,
              },
            },
            TandoorMealDetailScreen: TandoorMealDetailScreen
          
        },
        {
          // initialRouteName: 'Categories',
          defaultNavigationOptions: defaultStackNavOption
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
                      <Text style={{}}>Deals</Text>
                    ) : (
                      'Deal'
                    )
                }
              },
          Desi: {
            screen: DesiNavigator,
            navigationOptions: {
              tabBarIcon: tabInfo => {
                // return <Text>Dine In</Text> ;
              },
              tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{}}>Desi</Text>
                ) : (
                  'Desi'
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
                  <Text style={{}}>Bbq</Text>
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
                  <Text style={{ }}>Chinese</Text>
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
              //tabBarColor: Colors.accentColor,
              tabBarLabel:
                Platform.OS === 'android' ? (
                  <Text style={{}}>Tandoor</Text>
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
              // activeTintColor: 'red',
              // inactiveTintColor: Colors.themeColor,
              // font: 'open-sans',
              //fontWeight:'bold',
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
                  drawerLabel: 'Deal',
                  headerShown: false,
                  headerMode: 'none'
                  
                }
                
              }
          },
          // {
          //   contentOptions: {
          //     activeTintColor: 'red',
          //     labelStyle: {
          //       fontWeight:'bold',
          //     }
          //   }
          // }
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
