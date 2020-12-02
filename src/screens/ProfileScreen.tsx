import React from 'react'
import {useState, useRef} from 'react'
import { 
  View,
  Text,
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
    TextInput,
    Platform,
    Image,
  Button } from 'react-native';
import Header from '../components/Header';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import PhoneInput from "react-native-phone-number-input";
import * as Animatable from 'react-native-animatable';

const ProfileScreen: React.FC = (props) => {

    var n1 = props.navigation.getParam('name');
    var p1 = props.navigation.getParam('phone');
    var e1 = props.navigation.getParam('email');

    const [emails, setEmails] = useState('');
    const [names, setNames] = useState('');
    const [phones, setPhones] = useState('');


    const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

    const addPhoto=()=>{
        
        alert('add your new photo')
    }

    
    const SendData =()=>{

       n1 = names
       p1= phones
       e1 = emails

       const checkValid = phoneInput.current?.isValidNumber();
       setValid(checkValid ? checkValid : false);
      //proceed
       props.navigation.navigate({ routeName: ('Account'),
        params: {
        n1: n1,
        p1 : p1,
        e1 :e1,

      }});

    }

  return (
    <View style={styles.screen}>

        <ScrollView>
        <View style={styles.header}>
          
              <View style={{ marginTop:20}}>

             <ImageBackground
               style={styles.image}
               imageStyle={{ borderRadius: 65 , borderWidth:1,  }}
              source={require('../images/profile.jpg')}>
              
              <View style={styles.photoStyle}>
              <Animatable.View
              animation="rubberBand"
              duration={5000}
              >

              <TouchableOpacity  onPress={()=>{addPhoto()}} >
              <Icon name="camera"  size={21}
              style={styles.iconStyle}
                color='white'
               />
              </TouchableOpacity>

            </Animatable.View>
               </View>

              </ImageBackground>

            </View>
            

            <TextInput
            style={styles.inputArea}
            placeholder={n1}
            autoCapitalize="none"
            value={names}
            required={true}
            onChangeText={(value) => setNames(value)}
            initialValue={n1}
            //initialValue=""
            />

            <TextInput
            style={styles.inputArea}
            placeholder={e1}
            required={true}
            autoCapitalize="none"
            keyboardType="email-address"
            errorMessage="Please enter a valid email address."
            value={emails}
            onChangeText={(value) => setEmails(value)}
            initialValue={e1}
            //initialValue=""
            />    

            {/* <View > */}
              
            
            <PhoneInput
            //style={styles.inputArea}
            ref={phoneInput}
            defaultValue={p1}
            defaultCode="PK"
            // onChangeFormattedText={(text) => {
            //   setValue(text);
            // }}
            onChangeText={(value) => setPhones(value)}
            //withDarkTheme
            //withShadow
            //autoFocus
            />
           
            {/* </View> */}

        </View>
          
            <View style={styles.buttonView}>
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={() => { SendData() }}>
                <Text style={styles.buttonText}>Save Changes!</Text>
                </TouchableOpacity>
            </View>
        
        </ScrollView>
    </View>
  )
}
 
ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: 'My Profile',
    headerLeft: ()=>null
    
  };
};



const styles=StyleSheet.create({
  screen:{
    flex:1,
    //alignContent:'center',
    //alignItems: 'center'
    // justifyContent: 'center'
  },

  inputArea:{
    marginVertical:15,
    height: 40, 
    width:"80%",
    //backgroundColor: '#e0e0e0', 
    borderRadius:25,
    paddingHorizontal:10,
    borderColor:'#EE0202',
    borderWidth:0.5,
},

  header:{
  
    flex: 1,
    alignItems: "center",
    
  },

  iconStyle:{

    alignItems: 'center',
    justifyContent: 'center',
  },
 

  textDatas:{
    marginLeft:15,
  },

  button: {
    paddingTop: 15,
    flexDirection: 'row',
  },

  

  container:{
    flexGrow:1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
  },

  logotext:{
      marginVertical:5,
      marginHorizontal:130,
      fontSize:30,
      color:"#EE0202",
      alignItems: 'center',
      // justifyI: 'center',
      alignContent:'center',
      //fontStyle:"italic",
      fontWeight:"bold",
      borderBottomWidth:1,
      borderBottomColor:"#EE0202",
  },

  textData:{
    marginVertical:3,
    justifyContent: 'center',
    alignItems:'center',
  },

  text:{
    alignItems:'center',
    fontSize:16,
    color:'black',
  },

  image:{

    width: 130,
    height: 130,
    alignItems: 'center',
    marginBottom:10
  },

  photoStyle:{

    position: 'absolute',
     right:0,
     top: 0,
     backgroundColor: "#EE0202",
     borderRadius:8,
     width: 22,
     height: 22,
     marginLeft:5 
    },

  buttonView:{
    marginTop:20,
    alignItems: 'center', 
    paddingBottom:10 
},

button: {
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal:10,
  width:'50%',
  height:30,
  backgroundColor:'#EE0202',
  borderRadius:25,
},

buttonText: {    
  color:'#ffffff',
  fontWeight:'bold',
  fontSize: 20
}

})
export default ProfileScreen




