import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Bbq_MEALS } from '../data/Bbq_Data';
//import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import My_Button from '../components/MyButtonAndroid';
import PaymentScreen from '../screens/PaymentScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';
const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const BbqMealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = Bbq_MEALS.find(meal => meal.id === mealId);
  // console.log("Meal Detail")
  // console.log(selectedMeal.id);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.persons}</DefaultText>
        <DefaultText>Rs. {selectedMeal.price}/-</DefaultText>
        
      </View>
      <Text style={styles.title}>Order Detail</Text>
      {selectedMeal.dealDetail.map(detail => (
        <ListItem key={detail}>{detail}</ListItem>
      ))}
      <My_Button>ORDER NOW</My_Button>
      {/* <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
};

BbqMealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = Bbq_MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle:selectedMeal.title,
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
  }
});

export default BbqMealDetailScreen;
