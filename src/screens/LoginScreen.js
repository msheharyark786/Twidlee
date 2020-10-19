import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  Platform
} from 'react-native';


import Forms from '../components/Forms';
import Logos from '../components/Logos';
import SignupScreen from './SignupScreen';
import My_Buttons from '../components/MyButtonAndroid';
import * as Animatable from 'react-native-animatable';



  const LoginScreen= props =>{
    return (

      

      <View style={styles.container}>
            <View style={styles.header}>
            <Logos/>      
            </View>
            
           
           <View style={styles.footer}>
            <Forms type="Login"/>
              <View style={styles.signupContianer} >
                <Text style={styles.signupText}> Don't have an account yet? </Text>
                  <View style={styles.signupButton}> 
                  <Button title="SignUp"
                  color="#FF5722"
                  onPress={()=>{ props.navigation.navigate({routeName: 'SignupScreen'})}}
                  />
                  <Button title="Skip"
                  color="#FF5722"
                  onPress={()=>{ props.navigation.navigate({routeName: 'Categories'})}}
                  />
                  </View>
            </View>
            </View>
            
      </View>
   
      
      
   
   )}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF5722'
    },
    signupContianer:{
      flexGrow:1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    signupText:{
      fontSize:16,
      // color:'rgba(255,255,255, 0.7)',
      color:'black',
    },
    signupButton:{
      fontWeight:'700',
       color:'#ffffff',
      fontSize:20,
    },
    header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
    },

    footer:{
      flex:3,
      backgroundColor:'#ffaf49',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:40,
      paddingHorizontal:60,
    },
  
  });

  // const styles = StyleSheet.create({

  //   container:{
  //     flex:1,
  //     backgroundColor:'#009387',
  //   },
  //   header:{
  //     flex:1,
  //     justifyContent:'flex-end',
  //     paddingHorizontal:20,
  //     paddingBottom:50
  //   },
  //   footer:{
  //     flex:3,
  //     backgroundColor:'#fff',
  //     borderTopLeftRadius:30,
  //     borderTopRightRadius:30,
  //     paddingHorizontal:20,
  //     paddingVertical:30
  //   },
  //   textHeader:{
  //     color:'#fff',
  //     fontWeight:'bold',
  //     fontSize:30
  //   },
  //   textFooter:{
  //      color:'#05375a',
  //      fontSize:18 
  //   },
  //   action:{
  //     flexDirection:'row',
  //     marginTop:10,
  //     borderBottomWidth:1,
  //     borderBottomColor:'#f2f2f2',
  //     paddingBottom:5
  //   },
  //   textInput:{
  //     flex:1,
  //     // marginTop: platform.os -- 'ios' ? : -12,
  //     paddingLeft:10,
  //     color:'#05375a'
  //   },
  //   button:{
  //     alignItems:'center',
  //     marginTop:50,
  //   },
  //   signIn:{
  //     width:'100%',
  //     height:'50',
  //     justifyContent:'center',
  //     alignItems:'center',
  //     borderRadius:10
  //   },
  //   textSign:{
  //     fontSize:18,
  //     fontWeight:'bold'
  //   },

  // });


  export default LoginScreen;