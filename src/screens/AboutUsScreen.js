import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function TermConditionScreen() {
    return (
      <View style={styles.container}>

        <ScrollView>
        <View style={styles.screen}>
            {/* <Text style={styles.heading}>
            ABOUT US
            </Text> */}
            </View>

            <Text style={styles.smallHeading}>
            What information we collect about you?
            </Text>

            <Text style={styles.text}>
            We collect personal information from you when you order goods or services from us or use our website. We also collect information when you complete any customer survey. Website usage information may also be collected using cookies.
            </Text>

            <Text style={styles.smallHeading}>
            Cookies and Google Analytics
            </Text>

            <Text style={styles.text}>
            Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. 
            </Text>
            <Text style={styles.text}>
            This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files saved on your computer, to help the website analyze how you use the site. The information generated by the cookie about your use of the website will be transmitted to and stored by Google on servers in the United States. If this website anonymizes IP addresses, your IP address will be truncated by Google within a EU member state or other EEA state before being transmitted to the US. Only in exceptional situations will your full IP address be transmitted to Google servers in the United States and truncated there. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above. You can also prevent Google from collecting information (including your IP address) via cookies and processing this information by downloading this browser plugin and installing it: https://tools.google.com/dlpage/gaoptout
            </Text>

            <Text style={styles.smallHeading}>
            Access to your information
            </Text>
            <Text style={styles.text}>
            You have a right to request a copy of the information we hold on you at any time. Please email us if you would like to receive a copy of this information – info@twidlee.pk. There will be a small charge for processing this request.
            </Text>

            </ScrollView>
        </View>
    )
}

TermConditionScreen.navigationOptions = navData => {
    return {
      headerTitle: 'About Us',
      headerLeft: ()=>null
    };
  };

const styles=StyleSheet.create({

  container:{
    flex: 1,
  },

  screen:{
    alignItems:'center',
},

heading:{
  marginTop:10,
  fontFamily:'open-sans-bold',
  fontSize:30,
  color:"#EE0202",
},

smallHeading:{
  marginTop:30,
  fontFamily:'open-sans-bold',
  fontSize:20,
  paddingLeft:10,
},

text:{
  marginTop:10,
  fontFamily:'open-sans-bold',
  fontSize:14,
  padding: 20
},

})

export default TermConditionScreen
