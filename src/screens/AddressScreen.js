import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AddressScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                Add Address
            </Text>
        </View>
    )
}
AddressScreen.navigationOptions = navData => {
    return {
      headerTitle: 'MY ADDRESSES',
      headerLeft: ()=>null
      
    };
  };
const styles=StyleSheet.create({
    screen:{
      flex:1,
      fontSize:20,
      justifyContent:'center',
      paddingLeft:120,
      fontFamily:'open-sans-bold'
    }
})

export default AddressScreen
