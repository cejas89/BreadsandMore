import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../../components/GridItem';
import { useDispatch, useSelector, connect } from 'react-redux';
import { selectedCategory } from '../store/actions/category.action';



export default function CategoriesScreen({ navigation }) {
  //const categories = CATEGORIES
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();


  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Bread", {
      name: item.title,
    });
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

connect()(CategoriesScreen)