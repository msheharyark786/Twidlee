import React from 'react';
import { Platform,StyleSheet} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={25}
      style={styles.heart}
      color={Platform.OS === 'android' ? Colors.accentColor : Colors.primary}
    />
  );
};

const styles=StyleSheet.create({

  heart: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0, 
    borderRadius:50, 
    marginLeft:5
  }
})

export default CustomHeaderButton;