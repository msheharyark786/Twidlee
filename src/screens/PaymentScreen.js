import React, { useState } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity ,Image, ScrollView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MealDetailScreen from './MealDetailScreen';
import Colors from '../constants/Colors';
import { RadioButton } from 'react-native-paper';
import My_Buttons from '../components/MyButtonAndroid';


import { Bbq_MEALS } from '../data/Bbq_Data';
import { Chinese_MEALS } from '../data/Chinese_Data';
import { Desi_MEALS } from '../data/Desi_Data';
import { Tandoor_MEALS } from '../data/Tandoor_Data';
import { MEALS } from '../data/dummy-data';

const PaymentScreen = (props) =>{
    
   const mealId = props.navigation.getParam('mealId');

   
   const tandoorSelectedMeal = Tandoor_MEALS.find(meal => meal.id === mealId); 
   const chineseSelectedMeal = Chinese_MEALS.find(meal => meal.id === mealId);
   const desiSelectedMeal =  Desi_MEALS.find(meal => meal.id === mealId); 
   const bbqSelectedMeal =  Bbq_MEALS.find(meal => meal.id === mealId);
   const dealSelectedMeal = MEALS.find(meal => meal.id === mealId);

    if(dealSelectedMeal!=null)
    {
        //console.log(dealSelectedMeal.price)
        var selectedPrice = dealSelectedMeal.price;
        var selectedImage =  dealSelectedMeal.imageUrl;
        //console.log(dealSelectedMeal.price,dealSelectedMeal.imageUrl)
    }
    else if(tandoorSelectedMeal!=null)
    {
        var selectedPrice = tandoorSelectedMeal.price;
        var selectedImage = tandoorSelectedMeal.imageUrl;
        //console.log(tandoorSelectedMeal.price, tandoorSelectedMeal.imageUrl)
    }
    else if(chineseSelectedMeal!=null)
    {
        var selectedPrice = chineseSelectedMeal.price;
        var selectedImage = chineseSelectedMeal.imageUrl;
        //console.log(chineseSelectedMeal.price, chineseSelectedMeal.imageUrl)
    }
    else if( desiSelectedMeal!=null)
    {
        var selectedPrice =  desiSelectedMeal.price;
        var selectedImage =  desiSelectedMeal.imageUrl;
        //console.log(desiSelectedMeal.price, desiSelectedMeal.imageUrl)
    }
    else if(bbqSelectedMeal!=null)
    {
        var selectedPrice = bbqSelectedMeal.price;
        var selectedImage = bbqSelectedMeal.imageUrl;
        //console.log(bbqSelectedMeal.price, bbqSelectedMeal.imageUrl)
    }


    const MyIcon1 = <Icon name="minus" size={18} color="#EE0202" solid />;
    const MyIcon2 = <Icon name="plus" size={18} color="#EE0202" solid />;
    const Visa = <Icon name="cc-visa"  size={30} color="#512DA8" solid />;
    const masterCard = <Icon name="cc-mastercard"  size={30} color="#616161" solid />;
    const cash = <Icon name="money-bill-wave"  size={30} color="#A0BC1E" solid />;
    

    const [count, setCount] = useState(1);
    const [payment, setPayment] = useState(selectedPrice);
    const [checked, setChecked] = useState('second');

    const plusHandler=()=>{

         setCount(count + 1)
         const p= selectedPrice + payment;
         setPayment(p);
    }

    const minusHandler=()=>{
        if(count==1){
            return 1;
        }
        else{
            setCount(count - 1)
        } 
        const p=  payment - selectedPrice ;
        setPayment(p);
    }

    const Delivery=()=>{
         var p= payment/10;
         return p;
    }

    const gst=()=>{
        var p= payment/16;
        return p;
   }

   const SendData =() =>{

    if(dealSelectedMeal!=null)
    {
        var data= dealSelectedMeal.imageUrl;
    }
    else if(tandoorSelectedMeal!=null)
    {
        var data= tandoorSelectedMeal.imageUrl;
    }
    else if(chineseSelectedMeal!=null)
    {
        var data= chineseSelectedMeal.imageUrl;
    }
    else if(bbqSelectedMeal!=null)
    {
        var data= bbqSelectedMeal.imageUrl;
    }
    else if(desiSelectedMeal!=null)
    {
        var data= desiSelectedMeal.imageUrl;
    }

    props.navigation.navigate({ routeName: ('Reservation'),
    params: {
      mealId: data,
      totalAmount: payment
     }});
    
    }

    return(
        
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
             <Image source={{ uri: selectedImage }} style={styles.image} />

                <View style={styles.dealPlusMinus}>  
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {plusHandler()} }><Text> {MyIcon2}</Text></TouchableOpacity> 

                    <Text style={styles.counterCountainer}> {count} </Text> 
        
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {minusHandler()} }><Text> {MyIcon1}</Text></TouchableOpacity> 
                    <Text style={styles.PaymentStyle}>Rs.{payment}/-</Text>
                </View>
            </View>
        
            <View style={styles.paymentDetails}>

                <View style={styles.paymentDetailsContainer}>
                <Text style={styles.paymentDetailsText}>Subtotal</Text>
                <Text style={{paddingLeft:175,color:"#757575",}}>Rs.{payment}</Text>
                </View>

                <View style={styles.paymentDetailsContainer}>
                <Text style={styles.paymentDetailsText}>Delivery fee</Text>
                <Text style={{paddingLeft:157,color:"#757575",}}>Rs.{Delivery()}</Text>
                </View>

                <View style={styles.paymentDetailsContainer}>
                <Text style={styles.paymentDetailsText}>GST</Text>
                <Text style={{paddingLeft:200,color:"#757575",}}>Rs.{gst()}</Text>
                </View>


                <View style={styles.paymentDetailsContainer}>
                <Text style={styles.paymentDetailsText}>Discount</Text>
                <Text style={{paddingLeft:174,color:"#757575",}}>Rs.0</Text>
                </View>

            </View>


            <View style={styles.optionsContainer}>
                <Text style={{paddingTop:5, color:"#424242", fontWeight:'bold', fontSize:16 }}>Payment Method</Text>

                <View style={styles.radioButtonContainer}>
                <RadioButton
                color='#EE0202'
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                />
                <Text style={{ paddingTop:10, fontSize:12, marginRight:5 }}> Other methods</Text>
                <Text > {Visa} {masterCard} </Text>
                <Image
                style={ {width: 50, height: 30, marginLeft:5 , backgroundColor:'#E0E0E0' } }
                source={require('../images/easypaisa.jpeg')}
                />
                <Image
                style={ {width: 40, height: 30, marginLeft:5 , borderRadius:5 } }
                source={require('../images/jazzcash.jpeg')}
                />
                </View>

                <View style={styles.radioButtonContainer}>   
                <RadioButton
                color='#EE0202'
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                />
                <Text style={{ paddingTop:10, fontSize:12, marginRight:5 }}> Cash on Delivery</Text> 
                <Text> {cash} </Text>
                </View>

            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={() => { SendData() }}>
                <Text style={styles.buttonText}> Place Order Here!</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    );}

    // PaymentScreen.navigationOptions = navigationData => {
    //     // const mealId = navigationData.navigation.getParam('mealId');
    //     // const selectedMeal = Tandoor_MEALS.find(meal => meal.id === mealId);
    //     return {
    //       headerTitle:"Payment Method",
    //       headerRight:()=> (
    //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //           <Item
    //             title="Favorite"
    //             iconName="ios-star"
    //             onPress={() => {
    //               console.log('Mark as favorite!');
    //             }}
    //           />
    //         </HeaderButtons>
    //       )
    //     };
    //   };

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
        //borderTopLeftRadius:10,
        //borderTopRightRadius:10,
        marginLeft:10,
        marginRight:10,
    },

    dealPlusMinus:{
      width: '100%',
      paddingLeft:10,
      padding:10,
      paddingTop:10,
      flexDirection:'row',
      borderColor: '#ffffff',
      borderWidth: 1.5,
      backgroundColor: '#ffffff' , 
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },

    counterCountainer:{
        marginLeft:15,
        marginRight:15,
        fontSize:18,
        fontWeight:'bold',
    },

    PaymentStyle:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:160,
    },

    optionsContainer:{
        marginTop:12,
        paddingTop:2,
        borderColor:"#EE0202",
        borderWidth: 1,
        width: '90%',
        marginLeft:20,
        marginRight:20,
        borderRadius: 10,
        paddingLeft:7,
        backgroundColor: '#ffffff' , 
    },

    paymentDetailsContainer:{
        flexDirection:'row',
        marginTop:5,
    },

    paymentDetails:{
        marginTop:10,
        borderColor:"#EE0202",
        borderWidth: 1,
        width:'90%',
        marginLeft:20,
        marginRight:20,
        padding:5,
        borderRadius: 10,
        backgroundColor: '#ffffff' ,
    },

    paymentDetailsText:{
        marginTop:2,
        color:"#757575",  
    },

    image: {
        height: 250,
        marginTop: 2,
        width: '95%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },

      radioButtonContainer:{
          flexDirection: 'row',
          paddingTop:10,
          marginLeft:5,

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
})

export default PaymentScreen;



