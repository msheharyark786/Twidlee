import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function My_OrderScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                My Orders
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
      flex:1,
      fontSize:20,
      justifyContent:'center',
      paddingLeft:120,
      fontFamily:'open-sans-bold'
    }
})

export default My_OrderScreen
