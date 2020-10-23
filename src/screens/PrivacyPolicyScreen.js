import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PrivacyPolicyScreen() {
    const [data, setData]=useState("");

    return (
        <View style={styles.screen}>
            <Text>
                Privacy Policy Screen
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

export default PrivacyPolicyScreen
