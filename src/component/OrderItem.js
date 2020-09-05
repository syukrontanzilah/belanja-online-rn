import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CartItem from './CartItem'
import { fonts } from '../asset/fonts'
import Colors from '../constant/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

const OrderItem = (props) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.summary}>
                    <Ionicons name="shirt" color={Colors.green} size={15} />
                    <Text style={styles.amount}>${props.amount}</Text>
                </View>
                <Text style={styles.date}>Date: {props.date}</Text>
            </View>


            <TouchableOpacity
                onPress={() => {
                    setShowDetails(prevState => !prevState)
                }}
                activeOpacity={0.7}
                style={[styles.button, { backgroundColor: showDetails ? 'gray' : Colors.violet }]}>
                <Text style={styles.textButton}>{showDetails ? 'Hide' : 'Show Details'}</Text>
            </TouchableOpacity>
            {
                showDetails && (<View>
                    {props.items.map(cartItem => <CartItem
                        quantity={cartItem.quantity}
                        amount={cartItem.sum}
                        title={cartItem.productTitle}
                    />)}
                </View>)
            }

        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginTop:2,
        marginBottom: 6,
        borderRadius: 5,
        justifyContent: 'space-between',
        // flexDirection:'row'
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amount: {
        fontFamily: fonts.default,
        fontSize: 20,
        color: Colors.green
    },
    date: {
        fontFamily: fonts.default,
        fontSize: 15,
        color: Colors.gray
    },
    button: {
        backgroundColor: Colors.violet,
        paddingVertical: 8,
        paddingHorizontal: 0,
        alignSelf: 'flex-end',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        marginTop: -30
    },
    textButton: {
        fontFamily: fonts.default,
        color: 'white',
        paddingHorizontal: 10
    }

})
