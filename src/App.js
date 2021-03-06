import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import ShopNavigator from './navigation/ShopNavigator'
import productsReducer from './store/reducers/products'
import cartReducer from '../src/store/reducers/cart'
import orderReducer from './store/reducers/orders'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
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
