import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fonts } from '../../asset/fonts'
import Colors from '../../constant/Colors'
import CartItem from '../../component/CartItem'
import * as cartActions from '../../store/actions/cart'
import * as ordersActions from '../../store/actions/orders'


const CartScreen = (props) => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
    })

    const dispatch = useDispatch()

    return (
        <View style={styles.page}>
            <View style={styles.summary}>
                <Text style={styles.total}>Total: <Text style={{ color: cartItems.length === 0 ? "lightgray" : Colors.primary, fontSize: 30 }}>${cartTotalAmount.toFixed(2)}</Text> </Text>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
                    }}
                    activeOpacity={0.5}
                    style={[styles.button, { backgroundColor: cartItems.length === 0 ? 'lightgray' : Colors.primary }]}
                    disabled={cartItems.length === 0}>
                    <Text style={styles.textButton}>{ cartItems.length === 0?'Cart Empty' : 'Order Now'}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 25, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: fonts.default, color: Colors.gray }}>{cartItems.length === 0 ? "My Cart is empty :(" : "My Cart List:"} </Text>
            </View>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => <CartItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum.toFixed(2)}
                    deletable
                    onRemove={() => {
                        dispatch(cartActions.removeFromCart(itemData.item.productId))
                    }}
                />}
            />

        </View>
    )
}

CartScreen.navigationOptions = {
    headerTitle: 'My Cart'
}

export default CartScreen

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: Colors.primary,
        borderWidth: 0.5,
        margin: 20
    },
    total: {
        fontFamily: fonts.default,
        fontSize: 25,
        color: Colors.gray
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    textButton: {
        fontSize: 22,
        fontFamily: fonts.default,
        color: 'white'
    }
})
