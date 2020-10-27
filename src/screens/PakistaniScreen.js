import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES, Desi_MEALS } from '../data/Desi_Data';
import MealList from '../components/MealList';

import HeaderButton from '../components/HeaderButton';

const PakistaniScreen = props => {
    const catId = props.navigation.getParam('categoryId');

  const displayedMeals = Desi_MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

// PakistaniScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title
//   };
// };

const styles=StyleSheet.create({
    screen:{
        flex:1,
        fontSize:20,
        paddingLeft:130,
        justifyContent:'center'
    }
})

export default PakistaniScreen
