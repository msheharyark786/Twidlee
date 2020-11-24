import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
// import { CATEGORIES,Bbq_MEALS } from '../data/Bbq_Data';
import BbqMealList from '../components/BbqMealList';


const BbqScreen = props => {
    const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <BbqMealList listData={displayedMeals} navigation={props.navigation} />
}

BbqScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log("BBq")
  // console.log(selectedCategory);
  // return {
  //   headerTitle: selectedCategory.title
  // };
};



export default BbqScreen
