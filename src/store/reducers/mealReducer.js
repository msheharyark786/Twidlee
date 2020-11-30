import {MEALS, Meals} from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import {CATEGORY_ID} from '../actions/meals';

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
};



const mealReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_FAVORITE:
        const existingIndex = state.favoriteMeals.findIndex(
          meal => meal.id === action.mealId
        );
        if (existingIndex >= 0) {
          const updatedFavMeals = [...state.favoriteMeals];
          updatedFavMeals.splice(existingIndex, 1);
          return { ...state, favoriteMeals: updatedFavMeals };
        } else {
          const meal = state.meals.find(meal => meal.id === action.mealId);
          return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
        }
        case CATEGORY_ID:
          const existingCat = state.favoriteMeals.findIndex(
            meal => meal.categoryIds === action.categoryIds
          )

          
      default:
        return state;
    }
  };

export default mealReducer;