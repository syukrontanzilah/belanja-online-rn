import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constant/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { fonts } from '../asset/fonts';
import CartScreen from '../screens/shop/CartScreen';


const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen
    },
    ProductDetail: ProductDetailScreen,
    Cart : CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? 'white' : Colors.primary
        },
        headerTitleStyle: {
            fontFamily: fonts.default
        },
        headerTintColor: Platform.OS === "android" ? Colors.primary : 'white'
    }
})

export default createAppContainer(ProductsNavigator)

const styles = StyleSheet.create({})
