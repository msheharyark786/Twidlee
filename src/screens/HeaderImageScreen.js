import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

//import MealItem from './MealItem';

const HeaderImageScreen = props => {
  const renderMealItem = itemData => {
    return (
        //title={itemData.item.title}
        <View>
        <Text>Its Working</Text>
        <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
        </View>

    //   <MealItem
    //     title={itemData.item.title} 
    //     image={itemData.item.imageUrl}
    //     duration={itemData.item.duration}
    //     complexity={itemData.item.complexity}
    //     affordability={itemData.item.affordability}
    //     onSelectMeal={() => {
    //       props.navigation.navigate({
    //         routeName: 'MealDetail',
    //         params: { 
    //           mealId: itemData.item.id
    //         }
    //       });
    //     }}
    //   />
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
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default HeaderImageScreen;
