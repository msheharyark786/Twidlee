import React, { useEffect, useCallback } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import * as mealsActions from '../store/actions/meals';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';





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
  
  dispatch(mealsActions.category_id(selectedMeal.categoryIds));
  
  const CatId=useSelector(state=>state.mealReducer.catId);
  console.log("CatId",CatId)
    const func=()=>{
     // console.log("selectedMeal.categoryIds",selectedMeal.categoryIds)
     // for(var i=0;CatId[i]<=1;i++ ){
      
       console.log("selectedMeal.categoryIds",selectedMeal.categoryIds)
        if(CatId==selectedMeal.categoryIds)
      {
        //console.log("if",CatId);
        return dispatch(cartActions.addToCart(selectedMeal));
       
        
        //activeCat=selectedMeal.categoryIds;
      }
      else {
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => {
              dispatch(cartActions.allClear(1))
              dispatch(mealsActions.set_new_id(selectedMeal.categoryIds));
              dispatch(cartActions.addToCart(selectedMeal));
              
            
            } }
          ],
          { cancelable: false }
        );
        //console.log("elsemm",CatId);
        
      }
    }

  return (
    <ScrollView>
      <ImageBackground
              resizeMode="cover"
              source={{ uri: selectedMeal.imageUrl }}
              style={styles.image}
              >
              <View style={styles.heartStyle}>
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
              title="Favorite"
            iconName={isFavorite ? 'heart' : 'heart-outline'}
            onPress={()=>{dispatch(mealsActions.toggleFavorite(mealId));}}
            />
            </HeaderButtons>
            </View>
            </ImageBackground> 
      {/* <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} /> */}
      <View style={styles.details}>
        <DefaultText>{selectedMeal.persons}</DefaultText>
        <DefaultText>Rs.{selectedMeal.price}/-</DefaultText>
        
        
      </View>
      <Text style={styles.title}>Deal Detail</Text>
      {selectedMeal.dealDetail.map(detail => (
        <ListItem key={detail}>{detail}</ListItem>
      ))}

            <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={()=>{dispatch(cartActions.addToCart(selectedMeal))}}
                >
                <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
      
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    //backgroundColor: 'rgba(52, 52, 52, alpha)',
    //backgroundColor: 'transparent',
    //backgroundColor: 'white',
//opacity: 0.8
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
  backgroundColor: Colors.accentColor,
  borderRadius:25,
},

buttonText: {    
  color:'#ffffff',
  fontWeight:'bold',
  fontSize: 20
},
heartStyle:{

  alignItems: 'flex-end',
  marginTop:10,
  marginLeft:2
},

});


export default MealDetailScreen;