import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ProductScreen from './screens/ProductScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import products from './data/products'

export default function App() {
  const product = products[0]
  return (
    <View style={styles.container}>
      {/* <ProductScreen/> */}
      <ProductDetailsScreen/>
      
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
