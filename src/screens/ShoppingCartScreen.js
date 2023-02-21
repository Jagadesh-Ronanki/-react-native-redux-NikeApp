import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux' 
import { selectSubtotal, selectDeliveryCharge, selectTotal } from '../store/cartSlice'

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal)
  const deliveryCharge = useSelector(selectDeliveryCharge)
  const total = useSelector(selectTotal)
  return(
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${deliveryCharge}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  )
}

const ShoppingCartScreen = () => {
    const checkout = () => {}
    const cart = useSelector((state) => state.cart.cartItems)
    return (
      <>
      {
        cart.length > 0 ? (
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
        ) : (
          <Text style={styles.emptyCart}>Add items into bag 😉</Text>
        )
      }
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
  emptyCart: {
    color: 'gray',
    textAlign: 'center',
    top: "45%",
    /*left: "50%",
    transform: "translate(-50%, -50%)" */
  },
})

export default ShoppingCartScreen