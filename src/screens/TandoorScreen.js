import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

function TandoorScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>
                Tandoor Screen
            </Text>
        </View>
    )
}

TandoorScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Tandoor',
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

export default TandoorScreen
