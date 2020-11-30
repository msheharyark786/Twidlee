import React, { useEffect, useCallback } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import * as mealsActions from '../store/actions/meals';


import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';





const ListItem = props => {
  
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const dispatch = useDispatch();
  const availableMeals=useSelector(state=>state.mealReducer.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
 
  const isFavorite = useSelector(state =>
    state.mealReducer.favoriteMeals.some(meal => meal.id === mealId)
  );


  return (
    <ScrollView>
      <ImageBackground
              source={{ uri: selectedMeal.imageUrl }}
              style={styles.image}
            >
             
            </ImageBackground> 
      {/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} /> */}
      <View style={styles.details}>
        <DefaultText>{selectedMeal.persons}</DefaultText>
        <DefaultText>Rs.{selectedMeal.price}/-</DefaultText>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? 'heart' : 'heart-outline'}
          onPress={()=>{dispatch(mealsActions.toggleFavorite(mealId));}}
        />
      </HeaderButtons>
        
      </View>
      <Text style={styles.title}>Deal Detail</Text>
      {selectedMeal.dealDetail.map(detail => (
        <ListItem key={detail}>{detail}</ListItem>
      ))}

            <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={() => {
                  
                  // if((activeCat==''))
                  // {
                    dispatch(cartActions.addToCart(selectedMeal));
                  //   activeCat=selectedMeal.categoryIds;
                  // }
                  // if((selectedMeal.categoryIds==activeCat)){
                  //   dispatch(cartActions.addToCart(selectedMeal));
                  //   //activeCat=selectedMeal.categoryIds;
                  //   //selectedCategory=selectedMeal.categoryIds;
                  //   //console.log(selectedCategory);
                  // }
                  // console.log(activeCat)
                  // // else if((selectedCategory!==null)&&(selectedCategory===activeCat))
                  // // {
                  // //   dispatch(cartActions.addToCart(selectedMeal));
                  // // }
                  // if((selectedMeal.categoryIds!==activeCat)) 
                  // {
                  //   alert("Your previous cart will be cleared if you proceed with this restaurant.")
                  // }
                  
                  

                        // <View style={styles.container}>
                        //     <Products products={selectedMeal} onPress={selectedMeal.addItemToCart} />
                        // </View>
                    
                
                }}>
                <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
      
    </ScrollView>
  );
};

// MealDetailScreen.navigationOptions = navigationData => {
//   //const mealId = navigationData.navigation.getParam('mealId');
//   const mealTitle=navigationData.navigation.getParam('mealTitle');
//   const toggleFavorite = navigationData.navigation.getParam('toggleFav');
//   const isFavorite = navigationData.navigation.getParam('isFav');
  
//   return {
//     headerTitle: mealTitle,
//     headerRight:()=> (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Favorite"
//           iconName={isFavorite ? 'heart' : 'heart-outline'}
//           onPress={toggleFavorite}
//         />
//       </HeaderButtons>
//     )
//   };
// };

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },

  buttonView:{
    marginTop:30,
    alignItems: 'center', 
    paddingBottom:10 
},

button: {
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal:10,
  width:'70%',
  height:40,
  backgroundColor: '#FF5722',
  borderRadius:25,
},

buttonText: {    
  color:'#ffffff',
  fontWeight:'bold',
  fontSize: 20
}
});


export default MealDetailScreen;