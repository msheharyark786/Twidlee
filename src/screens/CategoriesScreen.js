import React from 'react';
import {
  View,
  Text,
  FlatList, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton'; 
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.imageUrl} 
        // color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: ('CategoryMeals'),
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
     
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderGridItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft:()=>(
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
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoriesScreen;
