// import {React, useState} from 'react'
// import { View, Text, StyleSheet, Image, } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import MealList from '../components/MealList';
 
// import HeaderButton from '../components/HeaderButton';
// //import { MEALS } from '../data/dummy-data';

// function ReservationScreen(props) {

//   const mealId = props.navigation.getParam('mealId');
//   const totalAmount = props.navigation.getParam('totalAmount');

//   // const [data, setdata] = useState();


//   // const onAddPress= (id)=>{ 
//   //   setData( MEALS.filter(  (mealId) => mealId.id != id  ));
//   //   alert("Successfully Done")
//   // };

//     // setdata([...data,
//     //   {
//     //     id: mealId.id ,
//     //     title: mealId.title,
//     //     image: mealId.imageUrl,
//     //   }])
  


//   console.log("Done!  ",totalAmount);
//   //const imageData = mealId.image
  

//   if(mealId!=null){

//     return (
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri:  mealId.imageUrl }} style={styles.image} />

//         <View style={styles.optionsContainer}>
//           <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:18 }}>Total Amount (Inc tax)  =</Text>
//           <Text style={{paddingTop:5, fontWeight:'bold', paddingLeft:20, fontSize:19, color:"#757575",}}>Rs.{totalAmount}/-</Text>
//         </View> 
//         </View> 

//         {/* <FlatList
//         data={data}
//         renderItem={({item}) => 
//           <View style={styles.imageContainer}>
//           <Image source={{ uri:  data.imageUrl }} style={styles.image} />
//           <View style={styles.optionsContainer}>
//           <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:18 }}>Total Amount (Inc tax)  =</Text>
//           <Text style={{paddingTop:5, fontWeight:'bold', paddingLeft:20, fontSize:19, color:"#757575",}}>Rs.{totalAmount}/-</Text>
//         </View>
//         </View>  
//         }/> */}

//       </View>
//     )
//   }
//   else return null;
    
// }

// ReservationScreen.navigationOptions = navData => {
//     return {
//       headerTitle: 'Reservation',
//       headerLeft:()=> (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Menu"
//             iconName="ios-menu"
//             onPress={() => {
//               navData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       )
//     };
//   };

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignContent:'center',
//     backgroundColor:'#EEEEEE',
// },

// imageContainer:{
//   marginTop:30,
//   alignItems:'center',
//   backgroundColor:'#EEEEEE',
//   borderColor:"#EE0202",
//   borderWidth: 1.5,
//   borderRadius: 10,
//   marginVertical: 2,
//   marginLeft:10,
//   marginRight:10,
  
// },

// image: {
//   marginTop: 2,
//   width: '95%',
//   height: 200,
  
// },

// optionsContainer:{
//         flexDirection: 'row',
//         marginTop:10,
//         width: '90%',
//         borderRadius: 10,
//         paddingLeft:7,
//     },

//     screen:{
//       padding:30,
//       paddingHorizontal:20,
//       flex:1,
//     },
  
//     header:{
//         alignItems:'center',
//         flex:2, 
//     },
  
//     body:{
//       flex:8,
    
//     },
  
//     item:{
//       fontSize:25,
//       borderWidth:2,
//       borderColor:'#ccc',
//       padding:20,
      
//     },

// })

// export default ReservationScreen


import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
 
import HeaderButton from '../components/HeaderButton';

function ReservationScreen(props) {

  const mealId = props.navigation.getParam('mealId');
  const totalAmount = props.navigation.getParam('totalAmount');
  //console.log("Done!  ",totalAmount);

  
  if(mealId!=null){
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri:  mealId.imageUrl }} style={styles.image} />
        <View style={styles.optionsContainer}>
          <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:14 }}>Total Amount (Inc tax)  =</Text>
          <Text style={{paddingTop:5, fontWeight:'bold', paddingLeft:20, fontSize:16, color:"#757575",}}>Rs.{totalAmount}/-</Text>
        </View> 
        </View> 
      </View>
    )
  }
  else return null;
    
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
},

image: {
  marginTop: 2,
  width: '95%',
  height: 200,
  
},
optionsContainer:{
        flexDirection: 'row',
        marginTop:10,
        width: '90%', 
        borderRadius: 10,
        paddingLeft:7,
        
    },

})

export default ReservationScreen
