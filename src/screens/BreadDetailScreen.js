import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BREADS } from "../../data/breads";
//import { addItem } from "../store/actions/cart.action";

const BreadDetailsScreen = ({ route }) => {
  const bread = useSelector((state) => state.breads.selected);
  //  const bread = route.params.breads;
  // const bread = BREADS.filter(
  //   (bread) => bread.id === route.params.productID
  // );


  useEffect(() => {
    console.log(bread);
  }, []);

  //const dispatch = useDispatch();

  //const handlerAddItemCart = () => dispatch(addItem(bread));



  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>{bread.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" />
        </View>
      </View>
    </View>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 40,
    fontFamily: "Tillana",
  },
  button: {
    marginTop: 15,
  },
});