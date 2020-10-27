import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Colors from '../constants/Colors';

const Header = props=> {
    return (
        <View style={styles.header}>
            <Text style={styles.tittle}>{props.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:45,
        width:'100%',
        justifyContent:'center',
        //paddingTop: 36,
        backgroundColor: "#B2B2B2",
        alignItems: 'center',

    },
    tittle: {
        color:Colors.primaryColor,
        fontSize: 30
    }
})


export default Header
