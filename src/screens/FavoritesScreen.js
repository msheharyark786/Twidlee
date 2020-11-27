import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import DesiMealList from '../components/DesiMealList';
import BbqMealList from '../components/BbqMealList';
import ChineseMealList from '../components/ChineseMealList';
import TandoorMealList from '../components/TandoorMealList';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.mealReducer.favoriteMeals);
  const idMeals = useSelector(state => state.mealReducer.favoriteMeals.type);

 
  // const availableMeals=useSelector(state=>state.mealReducer.meals);
  // // const mealId = props.navigation.getParam('mealId');
  // const selectedMeal = favMeals.find(meal => meal.type === 'Deal');
  // console.log(selectedMeal)
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  //console.log(idMeals);
  //return <MealList listData={favMeals} navigation={props.navigation} /> 
  const renderMealItem = itemData => {
    console.log(itemData.item.id)
    if(itemData.item.type==='Deals'){
    return <MealList listData={favMeals} navigation={props.navigation} /> 
    }
    //console.log(itemData.item.type)
    else if(itemData.item.type==='Pakistani'){
      return <DesiMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Bbq'){
      return <BbqMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Chinese'){
      return <ChineseMealList listData={favMeals} navigation={props.navigation} />  
    }
    else if(itemData.item.type==='Tandoor'){
      return <TandoorMealList listData={favMeals} navigation={props.navigation} />  
    }
      
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={favMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        //style={{ width: '100%' }}
      />
    </View>
  );
 
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () =>(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
