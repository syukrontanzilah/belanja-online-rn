import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constant/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { fonts } from '../asset/fonts';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? 'white' : Colors.primary
    },
    headerTitleStyle: {
        fontFamily: fonts.default
    },
    headerTintColor: Platform.OS === "android" ? Colors.primary : 'white'
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen
    },
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
},
    {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons name={"logo-windows"} size={25} color={Colors.primary} />
        },
        defaultNavigationOptions: defaultNavOptions
    });

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={"ios-cart"} size={25} color={Colors.primary} />
    },
    defaultNavigationOptions: defaultNavOptions
})

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductScreen,
    EditProduct: EditProductScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={"heart"} size={25} color={Colors.primary} />
    },
    defaultNavigationOptions: defaultNavOptions
})



const ShopNavigator = createDrawerNavigator({
    Products: {
        screen: ProductsNavigator,
        navigationOptions: {
            drawerLabel: <Text style={{fontSize:20, fontFamily: fonts.keren, color: Colors.primary, paddingVertical:10}}>Products</Text>
        }
    },
    Orders: {
        screen:OrdersNavigator,
        navigationOptions: {
            drawerLabel: <Text style={{fontSize:20, fontFamily: fonts.keren, color: Colors.primary, paddingVertical:10}}>Orders</Text>
        }
    },
    Admin : AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator)

const styles = StyleSheet.create({})
