import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
// import Forms from '../components/Forms';
import Logos from '../components/Logos';
import FormSignup from '../components/FormSignup';

  const SignupScreen= props =>{
    return (

    
            <View style={styles.container}>
              
            <View style={styles.header}>
            <Logos/>
            </View>
            

            <View style={styles.footer}>
             <ScrollView> 
            <FormSignup type="SignUp"/>
            <View style={styles.signupContianer} >
            <Text style={styles.signupText}> Already have an account!</Text>
            <Button 
            color="#FF5722"
            title="SignIn"
            onPress={()=>{ props.navigation.navigate({routeName: 'LoginScreen'})}}
            />
            </View>
            </ScrollView>
            </View>
            
        </View>
    )
  }

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
      color:'rgba(255,255,255, 0.7)',
      color:'black',
      paddingRight:10,
      paddingBottom:10
    },
    signupButton:{
      fontWeight:'700',
       color:'#ffffff',
      fontSize:20,
      paddingBottom:10
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
  export default SignupScreen;