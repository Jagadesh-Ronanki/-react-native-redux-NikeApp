import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem'
import cart from '../data/cart'

const ShoppingCartTotals = () => {
  return(
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>420,00 US$</Text>
      </View>
    </View>
  )
}

const ShoppingCartScreen = () => {
    const checkout = () => {}

    return (
      <>
        <FlatList 
          data={cart}
          renderItem={({item}) => <CartListItem cartItem={item}/>} 
          ListFooterComponent={ShoppingCartTotals}   
        />
        {/* Checkout Button */}
        <Pressable onPress={checkout} style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </>
    )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
})

export default ShoppingCartScreen