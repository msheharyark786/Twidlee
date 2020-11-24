import React from 'react';
// import { CATEGORIES,Desi_MEALS } from '../data/Desi_Data';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import DesiMealList from '../components/DesiMealList';
import MealList from '../components/MealList';

const DesiScreen = props => {
    const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <DesiMealList listData={displayedMeals} navigation={props.navigation} />
}

DesiScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  //console.log(selectedCategory);
  // return {
  //   headerTitle: selectedCategory.title
  // };
};



export default DesiScreen
