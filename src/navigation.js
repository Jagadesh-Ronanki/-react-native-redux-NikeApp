import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductScreen from './screens/ProductScreen'
import ShoppingCartScreen from './screens/ShoppingCartScreen'
import {FontAwesome5} from '@expo/vector-icons'
import { Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { selectCartItemsCount } from './store/cartSlice'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const cartCount = useSelector(selectCartItemsCount)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen 
          name='Product' 
          component={ProductScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{fontWeight: '500', marginLeft: 3}}>{cartCount}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name='Product Details' component={ProductDetailsScreen} options={{ presentation: 'modal'}}/>
        <Stack.Screen name='Cart' component={ShoppingCartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;