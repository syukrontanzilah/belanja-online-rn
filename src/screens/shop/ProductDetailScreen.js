import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Colors from '../../constant/Colors'
import { fonts } from '../../asset/fonts'
import { useSelector } from 'react-redux'

const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId)
    );

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.page}>
            <Image
                style={styles.image}
                source={{ uri: selectedProduct.imageUrl }}
            />
            <View style={{backgroundColor:'rgba(0,0,0,0.2)', paddingHorizontal:10, paddingVertical:20}}>
                <Text style={styles.title}>{selectedProduct.title}</Text>
                <Text style={styles.desc}>{selectedProduct.description}</Text>
            </View>


            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', paddingVertical:10 }}>
                {/* <TouchableOpacity
                    onPress={props.onViewDetail}
                    activeOpacity={0.7}
                    style={[styles.button, { backgroundColor: Colors.violet }]}>
                    <Text style={styles.textButton}>Details</Text>
                </TouchableOpacity> */}
                <Text style={[styles.price]}>${selectedProduct.price.toFixed(2)}</Text>

                <TouchableOpacity
                    onPress={props.onAddCart}
                    activeOpacity={0.7}
                    style={[styles.button, { backgroundColor: Colors.green }]}>
                    <Text style={styles.textButton}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = navData => {
    const title = navData.navigation.getParam('productTitle')
    return {
    headerTitle: <Text style={{fontFamily: fonts.default, fontSize:25, color: Colors.primary}}>{title}</Text>
    }
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    image: {
        height: 420
    },
    title: {
        fontFamily: fonts.default,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 25

    },
    desc: {
        fontFamily: fonts.default,
        color: Colors.gray,
        fontSize: 22
    },
    price: {
        fontFamily: fonts.default,
        color: Colors.primary,
        fontSize: 30,
        marginRight: 20
    },
    button: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 5,
        borderRadius: 5
    },
    textButton: {
        color: 'white',
        fontFamily: fonts.default,
        fontSize: 20,
        paddingVertical: 10,
    },
})
