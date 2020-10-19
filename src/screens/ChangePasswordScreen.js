import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ChangePasswordScreen() {
    return (
        <View style={styles.screen}>
            <Text>
                Change Password
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

export default ChangePasswordScreen
