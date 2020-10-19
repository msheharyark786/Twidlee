import React from 'react'
import { 
  View,
  Text,
  ScrollView, 
  StyleSheet,
  TouchableOpacity,
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

function AccountScreen(props) {
  //const renderGridItem = itemData => {
  return (
    <View style={styles.screen}>
      <Header title="Tanawal" />
      <ScrollView>
        <View>
        <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'Profile',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <Icon name='card-outline' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>Profile</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'Address',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        
        <Entypo name='address' size={25}
      color={Colors.accentColor} />
      <View>
      <Text>My Addresses</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'My_Order',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <Icon name='card-outline' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>My Orders</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'TermCondition',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <Icon name='terminal-outline' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>Terms & Conditions</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'PrivacyPolicy',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <MaterialIcons name='privacy-tip' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>Privacy Policy</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'AboutUs',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <Icon name='information-circle-outline' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>About Us</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: 'ChangePassword',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        <View>
        <MaterialCommunityIcons name='key-change' size={25}
      color={Colors.accentColor} /></View>
      <View>
      <Text>Change Password</Text></View></TouchableOpacity>
      
      </View>

      <View style={styles.line}>
        <TouchableOpacity style={styles.button}  onPress={() => {
        props.navigation.navigate({
          routeName: '',
          // params: {
          //   categoryId: itemData.item.id
          // }
        });
      }} >
        
        <SimpleLineIcons name="logout" size={25} 
      
      color={Colors.accentColor} />
      
      <Text>Logout</Text></TouchableOpacity>
      
      </View>
      </View>

      </ScrollView>
    </View>
  )
  // return (
  //   <View style={styles.list}>
  //     <FlatList
  //       data={CATEGORIES}
  //       keyExtractor={(item, index) => item.id}
  //       renderItem={renderGridItem}
  //       style={{ width: '100%' }}
  //     />
  //   </View>
  // );
  // }
}
 
AccountScreen.navigationOptions = navData => {
    return {
      headerTitle: 'My Account',
      headerLeft: (
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
  screen:{
    flex:1
  },
  textContainer:{
    fontSize:20,
    justifyContent:'center',
    paddingLeft:120
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  line:{
    borderBottomColor:'grey',
    borderBottomWidth:1,
    //alignItems:'flex-start'
  }


})
export default AccountScreen
