import React from 'react';
import { CATEGORIES,Chinese_MEALS } from '../data/Chinese_Data';
import ChineseMealList from '../components/ChineseMealList';


const ChineseScreen = props => {
    const catId = props.navigation.getParam('categoryId');

  const displayedMeals = Chinese_MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <ChineseMealList listData={displayedMeals} navigation={props.navigation} />
}

ChineseScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  console.log("Chinese")
  console.log(selectedCategory);
  // return {
  //   headerTitle: selectedCategory.title
  // };
};



export default ChineseScreen
