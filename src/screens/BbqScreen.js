import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function BbqScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>
            Bbq Screen
            </Text>
        </View>
    )
}

BbqScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Bbq',
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
    screen:{
        flex:1,
        fontSize:20,
        alignContent:'center'
    }
})

export default BbqScreen
