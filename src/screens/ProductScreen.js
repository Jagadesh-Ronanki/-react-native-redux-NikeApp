import { StyleSheet, View, FlatList, Image, Pressable } from 'react-native'
import products from '../data/products'

const ProductScreen = ({ navigation }) => {
    return(
        <FlatList
            data = {products}
            renderItem = {({item}) => (
            <Pressable onPress={() => {navigation.navigate('Product Details')}} style={{width: "50%", padding:1}}>
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