import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import CartItem from '../components/CartItem';
import Card from '../components/Card';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import { connect } from 'react-redux'

const CartScreen = props => {  
  // const Id = useSelector(state => state.meals );
  // const selectedMeal = availableMeals.find(meal => meal.id === Id);
  // console.log(mealId,"  mealID  ", selectedMeal , "   selected  ")

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        mealId: key,
        //id:items[key],
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.mealId > b.mealId ? 1 : -1
    );
    
  }
  );

  // const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  
  // const Id = useSelector(state => state.meals );
  // const selectedMeal = availableMeals.find(meal => meal.id === Id);
  // console.log(mealId,"  mealID  ", selectedMeal , "   selected  ")

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{'  '}
          <Text style={styles.amount}>
            Rs.{Math.round(cartTotalAmount.toFixed(2) * 100) / 100}/-
          </Text>
        </Text>

        
        {/* <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
            
          }}
        /> */}

          <TouchableOpacity
            
            style={styles.orderNow}
           disabled={cartItems.length === 0}
            color="white"
            onPress={() => {
              //dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
              props.navigation.navigate({ routeName: ('PaymentScreen'),
              params: {
                mealId: cartItems,
                totalAmount: cartTotalAmount
               }
              });        
            }}
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>


      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.mealId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.title}
            amount={itemData.item.sum}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.mealId));
            }}
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    //margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    margin: 20
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  },
  orderNow: {
    // justifyContent: 'center',
    // alignItems: 'center',
     marginHorizontal:10,
     padding:5,
    // width:90,
    // height:30,
    backgroundColor: "#EE0202",
    borderRadius:12,
  },

  buttonText: {    
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 16
  },
});

const mapStateToProps = (state) => {
  return {
      cartItems: state,
      // selectedMeal : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', product: product })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);