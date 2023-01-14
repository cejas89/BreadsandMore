import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CART from '../../data/cart';
import CartItem from '../../components/CartItem';

import { useSelector, useDispatch, connect } from 'react-redux';
import { removeItem } from '../store/actions/cart.action';

export default function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const handlerConfirmCart = () => {
    console.log("Confirmado")
  }

  const handlerDeleteItem = (id) => {
    dispatch(removeItem(id))
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>

      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>


      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});


connect()(CartScreen)