import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Colors from '../constant/Colors'
import { fonts } from '../asset/fonts'


const ProductItem = (props) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={props.onViewDetail}
        style={styles.container}>
            <Image source={{ uri: props.image }}
                style={styles.image}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:-54, backgroundColor: 'rgba(0,0,0,0.5)', paddingVertical:5 }}>
               <View style={{marginLeft:20, flex:1}}>
               <Text
               numberOfLines={1}
               style={styles.title}>{props.title}</Text>
               <Text style={[styles.price]}>${props.price.toFixed(2)}</Text>
               </View>

                <View style={{ flexDirection: 'row', marginRight:5 }}>
                    <TouchableOpacity
                        onPress={props.onViewDetail}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: Colors.violet }]}>
                        <Text style={styles.textButton}>Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={props.onAddCart}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: Colors.green }]}>
                        <Text style={styles.textButton}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        backgroundColor: 'white',
        marginBottom:10
    },
    image: {
        height: 400,
        backgroundColor: 'wheat'
    },
    button: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius:5
    },
    textButton: {
        color: 'white',
        fontFamily: fonts.default,
        fontSize: 20,
        paddingVertical: 10,
    },
    title: {
        fontFamily: fonts.default,
        color: 'wheat',
        fontSize: 20

    },
    price: {
        color: Colors.primary,
        fontFamily: fonts.default,
        fontSize: 25
    }
})
