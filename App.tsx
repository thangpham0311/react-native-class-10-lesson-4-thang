/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import viewSanPham from './src/viewSanPham';

const DATA = [
  {
    id: 1,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eqK_mbxJ8X2ch7mkPygAc1aJs4pGe-FCkA&usqp=CAU'
  },
  {
    id: 2,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU'
  },
  {
    id: 3,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLuo4Oq3eov8b3nFnpq1xNIFJopLLkvrQ9A&usqp=CAU'
  },
  {
    id: 4,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU'
  },
  {
    id: 5,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU'
  },
  {
    id: 6,
    title: 'HP Pavilion Gaming Laptop',
    price: 1000.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCN0daqNWndzDcmUA0EcpphZODyye5nUa2A&usqp=CAU'
  }
]


type customItem = {
  img: string,
  title: string,
  price: number,
}


const App = () => {

  const Item = ({ item }: { item: customItem }) => (
    <TouchableOpacity style={styles.item}
      onPress={() =>
        Alert.alert("Thông báo",
          'Giá của sản phẩm: $' + item.price +
          '\nTên của sản phẩm:' + item.title
        )
      }>
      <Image source={{ uri: item.img }} style={styles.img} ></Image>
      <Text style={{ marginTop: 30 }}>{item.title}</Text>
      <Text style={{ marginTop: 30, color: 'red', fontSize: 16 }}> ${item.price}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: customItem }) => (
    <Item
      item={item}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 20 }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 300,
    alignItems: 'center',
    borderWidth: 0.5,
    color: 'black',
    margin: 10,
    borderRadius: 8
  },
  img: {
    width: 120,
    height: 120,
  },

});

export default App;
