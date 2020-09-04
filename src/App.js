import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from './screens/shop/ProductDetailScreen'
import CartScreen from './screens/shop/CartScreen'
import OrdersScreen from './screens/shop/OrdersScreen'
import UserProductScreen from './screens/user/UserProductScreen'
import EditProductScreen from './screens/user/EditProductScreen'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator'

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  
  )
}

export default App

const styles = StyleSheet.create({})
