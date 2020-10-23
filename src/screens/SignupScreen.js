import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import Logos from '../components/Logos';
import LoginScreen from './LoginScreen';
import {useState} from 'react';

const SignupScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSignupButton = () => {

    console.log("handleSignupButton")

    if (!userName) {
      alert('Please enter userName');
      return;
    }
    if (!password) {
      alert('Please enter Password');
      return;
    }
    if (!email) {
      alert('Please enter Email');
      return;
    }
    if (!phoneNumber) {
      alert('Please enter phoneNumber');
      return;
    }

    console.log(email , password, userName, phoneNumber)

    if((email !=null) && (password !=null) && (phoneNumber!=null) && (userName !=null))
    {
      props.navigation.navigate({
        routeName:'Categories' 
        })
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logos />
      </View>

      <View style={styles.footer}>

        <KeyboardAvoidingView
           behavior="padding"
           keyboardVerticalOffset={50}
        >
        <ScrollView>
          {/* <FormSignup type="SignUp"/> */}

          <TextInput
            style={styles.inputArea}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            value={userName}
            required={true}
            onChangeText={(value) => setUsername(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            required={true}
            minLength={6}
            placeholderTextColor="white"
            errorMessage="Please enter Minimum 6 characters password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Email"
            required={true}
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            keyboardType="email-address"
            errorMessage="Please enter a valid email address."
            value={email}
            onChangeText={(value) => setEmail(value)}
            initialValue=""
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Phone number"
            required={true}
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            keyboardType="number-pad"
            minLength={11}
            errorMessage="Please enter a valid Phone number"
            value={phoneNumber}
            onChangeText={(value) => setPhoneNumber(value)}
            initialValue=""
          />

          <TouchableOpacity
          style={styles.signupButton}
          activeOpacity={0.7}
           onPress={() => { handleSignupButton ()} }>

          <Text style={styles.signupButtonText}> Sign Up</Text>
        </TouchableOpacity>


          <View style={styles.signupContianer}>
            <Text style={styles.signupText}> Already have an account!</Text>


          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => {
            props.navigation.navigate({routeName: 'LoginScreen'});
            }}>
            <Text style={styles.buttonText}> Sign in</Text>
          </TouchableOpacity>

          </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
     alignItems: 'center',
    backgroundColor: '#FF5722',
  },

  inputArea:{
    //justifyContent: 'center',
    // alignItems: 'center',
    marginVertical:10,
    height: 40, 
    width:230,
    backgroundColor: 'rgba(255,255,255,0.3)', 
    borderRadius:25,
    paddingHorizontal:30,
    //padding:10,
},

signupButtonText:{
  fontSize:20, 
  color:'#ffffff',
  fontWeight:'bold',
  textAlign:'center',
},

  signupContianer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signupText: {
    
    fontSize:16, 
    color:'black',
    fontWeight:'500',
    textAlign:'center',
    },
  signupButton: {

    // alignItems: 'center',
    // justifyContent: 'center',
    width:100,
    height:30,
    backgroundColor: '#FF5722',
    borderRadius:25,
    marginVertical:10, 
    fontSize:16, 
    marginRight:30,

  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffaf49',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 40,
  },

  button:{
    width:100,
    height:30,
    backgroundColor: '#FF5722',
    borderRadius:25,
    marginVertical:20, 
    fontSize:20,  
},

buttonText:{
    fontSize:20, 
    color:'#ffffff',
    fontWeight:'bold',
    textAlign:'center',
   
},
});
export default SignupScreen;
