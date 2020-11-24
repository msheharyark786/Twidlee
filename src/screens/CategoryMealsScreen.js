import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DesiMealList from '../components/DesiMealList';

//import SecondTopScreen from '../screens/SecondTopScreen'
//import { View } from 'react-native-animatable';

const CategoryMealScreen = props => {
    
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  // const offerMeals= MEALS.filter(
  //   meal => meal.offerId.indexOf(displayedMeals) >= 0
  // );
// console.log("cat Meals");
// console.log(displayedMeals);
// console.log(displayedMeals.price)
//console.log(displayedMeals.offerId)

  return (
  <MealList listData={displayedMeals} navigation={props.navigation} />
  //<DesiMealList listData={displayedMeals} navigation={props.navigation} />
  
  )


};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  // return {
  //   headerTitle: navData.navigation.getParam('title')
  // };
};

export default CategoryMealScreen;
