import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts } from '../asset/fonts'
import Colors from '../constant/Colors'

const CartItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemData}>
                <Image />
                <Text style={styles.qty}>{" "}{props.quantity}{" "} </Text>
                <Text numberOfLines={1} style={styles.title}>{props.title} </Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.amount}>${props.amount}</Text>
                {/* .toFix(2) */}

                { props.deletable &&
                    <TouchableOpacity
                        onPress={props.onRemove}
                        style={styles.trashButton}
                    >
                        <Ionicons name="ios-trash" size={23} color="salmon" />
                    </TouchableOpacity>
                }

            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 5,
        marginBottom: 8,
        paddingVertical: 15

    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    qty: {
        fontFamily: fonts.default,
        fontSize: 20,
        color: Colors.gray
    },
    title: {
        fontFamily: fonts.default,
        fontSize: 18,
        color: Colors.gray
    },
    amount: {
        fontFamily: fonts.default,
        fontSize: 20,
        color: Colors.gray
    },
    trashButton: {
        marginLeft: 20
    }
})
