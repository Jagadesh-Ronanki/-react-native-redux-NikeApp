import { StyleSheet, View, FlatList, Image, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch();
  return(
    <FlatList
      data = {products}
      renderItem = {({item}) => (
        <Pressable onPress={() => {
          // dispatch
          dispatch(productsSlice.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details')
          }} style={{width: "50%", padding:1}}>
          <Image source={{uri: item.image}} style={styles.image}/>
        </Pressable>
      )}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
    image: {
      width: "100%",
      aspectRatio: 1,
    },
  });

export default ProductScreen