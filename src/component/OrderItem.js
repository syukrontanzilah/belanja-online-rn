import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CartItem from './CartItem'
import { fonts } from '../asset/fonts'
import Colors from '../constant/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

const OrderItem = (props) => {
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
                    activeOpacity={0.5}
                    style={styles.button}>
                    <Text style={styles.textButton}>Show Details</Text>
                </TouchableOpacity>
          

        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginBottom: 8,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection:'row'
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
        paddingHorizontal: 5,
        // alignSelf: 'flex-end',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    textButton: {
        fontFamily: fonts.default,
        color: 'white',
        paddingHorizontal: 10
    }

})
