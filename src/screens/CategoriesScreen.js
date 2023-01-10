import { Button, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import GridItem from '../../components/GridItem';
import CATEGORIES from '../../data/categories';

export default function CategoriesScreen({ navigation }) {
  const categories = CATEGORIES;

  const handleSelectedCategory = (item) => {
    navigation.navigate('Bread', {
      name: item.title
    })
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColums={2} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    margin: 10,
  }

})