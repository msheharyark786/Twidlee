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

import { Tandoor_MEALS } from '../data/Tandoor_Data';
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

const TandoorMealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = Tandoor_MEALS.find(meal => meal.id === mealId);
  // console.log("Tandoor Meal Detail")
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
      <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={() => {
                  props.navigation.navigate({
                    routeName: ('PaymentScreen'),
                    params: {
                      mealId: selectedMeal.id
                    }
                  });
                }}>
                <Text style={styles.buttonText}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  );
};

TandoorMealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = Tandoor_MEALS.find(meal => meal.id === mealId);
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

export default TandoorMealDetailScreen;
