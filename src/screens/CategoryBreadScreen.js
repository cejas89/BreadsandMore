import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import BREADS from '../../data/breads'
import CATEGORIES from '../../data/categories';
import BreadItem from '../../components/BreadItem';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';

import { filteredBread, selectBread } from '../store/actions/bread.action';

export default function CategoryBreadScreen({ navigation, route }) {
  //const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread)
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id))
    navigation.navigate("Bread", {
      name: item.title,
    });
  };



  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};
connect()(CategoryBreadScreen);