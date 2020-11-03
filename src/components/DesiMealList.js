import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import DesiMealItem from './DesiMealItem';

const DesiMealList = props => {
  const renderMealItem = itemData => {
    return (
      <DesiMealItem
        title={itemData.item.title} 
        image={itemData.item.imageUrl}
        price={itemData.item.price}
        persons={itemData.item.persons}
        
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'DesiMealDetail',
            params: { 
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
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
