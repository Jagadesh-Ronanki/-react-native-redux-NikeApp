import { StyleSheet, View, FlatList, Image } from 'react-native'
import products from '../data/products'

const ProductScreen = () => {
    return(
        <FlatList
            data = {products}
            renderItem = {({item}) => (
            <View style={{width: "50%", padding:1}}>
                <Image source={{uri: item.image}} style={styles.image}/>
            </View>
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