import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';


import MealItem from './MealItem';
const DesiMealList = props => {
  const renderMealItem = itemData => {
    if(itemData.item.type==='Pakistani'){
    return (
      <MealItem
        title={itemData.item.title} 
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        persons={itemData.item.persons}
        
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: { 
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
      }
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default DesiMealList;
