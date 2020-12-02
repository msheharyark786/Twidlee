import {MEALS, CATEGORIES} from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import {CATEGORY_ID, CLEAR, SET_NEW_ID} from '../actions/meals';

const initialState={
  
    meals:MEALS,
    categoryId:CATEGORIES,
    filteredMeals:MEALS,
    favoriteMeals:[],
    catId:['']
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
          const existingCatId=action.categoryIds;
          //state.catId = action.categoryIds;
        console.log("existingCatId",existingCatId);
          
        //  console.log("state.catId",state.catId)

          if (state.catId == existingCatId  || state.catId=='')
          {
            state.catId = existingCatId;
            // catId=existingCatId;
            console.log("State",state.catId);
            
          }
          // else if(existingCatId==1){
          //   state.catId = '';
          // }
        //  case CLEAR:
        //    const toChange=action.change
        //   if(toChange==1){
        //     state.catId = '';
        //     state.catId = existingCatId;

        //   }
          case SET_NEW_ID:
            state.catId=action.new_Category_id;

          
      default:
        return state;
    }
  };

export default mealReducer;