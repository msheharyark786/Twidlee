import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
 
import HeaderButton from '../components/HeaderButton';

function ReservationScreen() {
    return (
        <View style={styles.screen}> 
            <Text>
                Reservations Screen
            </Text>
            {/* <MealList listData={} navigation={props.navigation} /> */}
        </View> 
    )
}

ReservationScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Reservation',
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
        flex:1,
        fontSize:20,
        justifyContent:'center',
        paddingLeft:120

    }
})

export default ReservationScreen
