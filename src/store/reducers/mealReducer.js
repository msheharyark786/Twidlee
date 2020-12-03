import {MEALS, CATEGORIES} from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import {CATEGORY_ID, CLEAR, SET_NEW_ID} from '../actions/meals';
import {useEffect} from 'react';
const initialState={
  
    meals:MEALS,
    categoryId:CATEGORIES,
    filteredMeals:MEALS,
    favoriteMeals:[],
    catId:'',
    // name: " M. Sheharyar Khan",
    // email: "msheharyark786@gmail.com",
    // phone : '3249472294',
    
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
          
         //console.log("state.catId",state.catId)

          if (state.catId == existingCatId  || state.catId=='')
          {
            state.catId = existingCatId;
            // catId=existingCatId;
            console.log("IF_State",state.catId);
            
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
          // case SET_NEW_ID:
          //   var new_category=0;
          //   console.log("action.new_Category_id",action.new_Category_id)
          //   if(state.catId!=action.new_Category_id){
          //     state.catId=existingCatId;
          // }
          


          // case CHANGE_NAME:
            
          //   if(action.new_name!=state.name){
              
          //     //state.name="";
          //     state.name=action.new_name;
              
          //   }
          //   case CHANGE_EMAIL:
          //     if(action.new_email!=state.email){
          //       //console.log("state.email",state.email)
          //       //state.email="";
          //       state.email=action.new_email;
          //       //console.log("state.email",state.email)
          //     }
          //   case CHANGE_PHONE:
          //     if(action.new_phone!=state.phone){
          //       //state.phone="";
          //       state.phone=action.new_phone;
          //     }
            
            


          
      default:
        return state;
    }
  };

export default mealReducer;