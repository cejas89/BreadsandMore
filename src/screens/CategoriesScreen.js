import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../../components/GridItem';
//import CATEGORIES from '../../data/categories';
import { useSelector } from 'react-redux';


export default function CategoriesScreen({ navigation }) {
  const categories = useSelector((state) => state.categories.categories);


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

