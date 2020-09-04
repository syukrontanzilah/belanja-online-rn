import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constant/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';


const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen
    },
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? 'white' : Colors.primary
        },
        
        headerTintColor: Platform.OS === "android" ? Colors.primary : 'white'
    }
})

export default createAppContainer(ProductsNavigator)

const styles = StyleSheet.create({})
