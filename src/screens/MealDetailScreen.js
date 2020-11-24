import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
// import * as cartActions from '../store/actions/cart';

import { MEALS } from '../data/dummy-data';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import My_Button from '../components/MyButtonAndroid';




const ListItem = props => {
  
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//       addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
//   }
// }
const MealDetailScreen = props => {
  const dispatch = useDispatch();
  // const productId = props.navigation.getParam('productId');
  // const selectedProduct = MEALS.find(meal => meal.id === mealId);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealsidd=selectedMeal.id;
  var count=0;
  //const dispatch = useDispatch();
  
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
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
                onPress={() => {
                  ///count++,
                  //console.log(count);
                  dispatch(cartActions.addToCart(selectedMeal));
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

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight:()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    )
  };
};

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