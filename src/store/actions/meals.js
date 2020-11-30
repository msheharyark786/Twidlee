export const TOGGLE_FAVORITE= 'TOGGLE_FAVORITE';
export const CATEGORY_ID= 'CATEGORY_ID';

export const toggleFavorite=(id)=>{
    return {type: TOGGLE_FAVORITE, mealId:id};  
}
export const category_id=(id)=>{
    return {type: CATEGORY_ID, categoryIds:id};  
}