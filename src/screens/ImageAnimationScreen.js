import React, {useRef,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
  //YellowBox
} from 'react-native';
import {  
    createAppContainer
    
  } from 'react-navigation';
  import {createStackNavigator} from 'react-navigation-stack';
  import {createDrawerNavigator} from 'react-navigation-drawer'
  import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
  import SecondTopScreen from '../screens/SecondTopScreen';
  
  import AboutUsScreen from '../screens/AboutUsScreen';
  import ReviewsScreen from '../screens/ReviewsScreen';
  // import Colors from '../constants/Colors';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { CATEGORIES } from '../data/dummy-data';
import ThreeTopScreen from '../navigation/ThreeTopScreen';
import CategoryGridTile from '../components/CategoryGridTile';

import * as Animatable from 'react-native-animatable';
//import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

// useEffect(() => {
//   YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
// }, [])
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
const MenuNavigator = createStackNavigator(
  {
    // MealsNavigator: MealsNavigator,
    SecondTop:SecondTopScreen,
    // Categories: {
    //   screen: CategoriesScreen,
    //   navigationOptions: {
    //     title: '',
    //     headerShown: false,
    //   },
    // },
    
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);
const ContactNavigator = createStackNavigator(
  {
      AboutUs: AboutUsScreen,
    
  },
  {
    // initialRouteName: 'Categories',
   // defaultNavigationOptions: defaultStackNavOptions
  }
);
const ReviewsNavigator = createStackNavigator(
  {
      ReviewsScreen:ReviewsScreen
    
  },
  {
    // initialRouteName: 'Categories',
    //defaultNavigationOptions: defaultStackNavOptions
  }
);


const ThreeTopNavigator = createMaterialTopTabNavigator( 
  {
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title:'Menu'
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title:'Contact',
      }
    },
    Reviews: {
      screen: ReviewsNavigator,
      navigationOptions: {
        title:'Reviews',
      }
    },
  },{
    tabBarOptions:{
      activeTintColor:Colors.accentColor,
      inactiveTintColor: Colors.themeColor,
      indicatorStyle: {
        backgroundColor: Colors.accentColor,
      }, 
      style: {
        height: 45,
        backgroundColor: Colors.primaryColor,
      },
      labelStyle: { fontSize: 14, fontWeight:"bold" },
      
    }
  });

const ThreeNavigator = createDrawerNavigator(
  {
    ThreeFavs:{
        screen: ThreeTopNavigator,
        navigationOptions: {
          drawerLabel: 'Menu',
          // title: '',
          // headerShown: false,
          // headerMode: 'none'
        }
      }
  },
  {
    contentOptions: {
      //activeTintColor: Colors.accentColor,
      // labelStyle: {
      //   fontWeight:'bold'
      // }
    }
  }
);
const ImageAnimationScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    // console.log(catId);
    const navTitleView = useRef(null);

    // const displayedMeals = Desi_MEALS.filter(
    //   meal => meal.categoryIds.indexOf(catId) >= 0
    // );
  
    //return <DesiMealList listData={displayedMeals} navigation={props.navigation} />

  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

     
      
       <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.8}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={{ uri:selectedCategory.imageUrl }} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{selectedCategory.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{selectedCategory.title}</Text>
          </Animatable.View>
        )}>
            <View style={{ height: 1000 }}>
          <SafeAreaView>
         <TriggeringView
          //style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}
          
        >
            
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Menu</Text>
            
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#FF6347" />
              {/* <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text> */}
            {/* </View> */}

          {/* </View> */} 
          
      
        
        <View style={[styles.section, styles.sectionLarge]}>
        <SecondTopScreen /> 
        </View>
        </TriggeringView>
        </SafeAreaView>
        </View>
       
      
      </HeaderImageScrollView> 
{/* <ThreeTopScreen />  */}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    //padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});
export default ThreeNavigator;