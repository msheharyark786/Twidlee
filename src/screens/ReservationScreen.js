import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
 
import HeaderButton from '../components/HeaderButton';

function ReservationScreen(props) {

  const mealId = props.navigation.getParam('mealId');
  const totalAmount = props.navigation.getParam('totalAmount');
  console.log("Done!  ",totalAmount);
  //const imageData = mealId.image
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri:  mealId }} style={styles.image} />

        <View style={styles.optionsContainer}>
          <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:18 }}>Total Amount (Inc tax)  =</Text>
          <Text style={{paddingTop:5, fontWeight:'bold', paddingLeft:20, fontSize:19, color:"#757575",}}>Rs.{totalAmount}/-</Text>
        </View> 
        </View> 

      </View>
    )
}

ReservationScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Reservation',
      headerLeft:()=> (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    backgroundColor:'#EEEEEE',
},

imageContainer:{
  marginTop:30,
  alignItems:'center',
  backgroundColor:'#EEEEEE',
  borderColor:"#EE0202",
  borderWidth: 1.5,
  borderRadius: 10,
  marginVertical: 2,
  marginLeft:10,
  marginRight:10,
  //borderTopLeftRadius:10,
  //borderTopRightRadius:10,
},

image: {
  marginTop: 2,
  width: '95%',
  height: 200,
  
},

optionsContainer:{
        flexDirection: 'row',
        marginTop:10,
       // borderColor:"#EE0202",
       // borderWidth: 1,
        width: '90%',
        //marginLeft:20,
        //marginRight:20,
        borderRadius: 10,
        paddingLeft:7,
        //backgroundColor: '#ffffff' , 
    },

})

export default ReservationScreen
