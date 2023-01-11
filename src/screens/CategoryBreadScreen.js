import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import BREADS from '../../data/breads'
import CATEGORIES from '../../data/categories';
import BreadItem from '../../components/BreadItem';
import { useSelector, useDispatch } from 'react-redux';


export default function CategoryBreadScreen({ navigation, route }) {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Bread", {
      name: item.title,
    });
  };



  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};