import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CART from '../../data/cart'
import OrderItem from '../../components/OrderItem';

export default function OrdersScreen() {
  const items = CART;

  const handlerDeleteItem = () => {
    console.log("Elminiado")
  }

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handlerDeleteItem} />
  );


  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({})