import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import ProductItem from '../../component/ProductItem';
import * as cartActions from '../../store/actions/cart'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        })
    }

    return (
        <View style={styles.page}>
            {/* <StatusBar backgroundColor="wheat"/> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onSelect={() => {
                         selectItemHandler(itemData.item.id, itemData.item.title)
                        }}
                    >
                    <TouchableOpacity
                        onPress={()=> {
                            selectItemHandler(itemData.item.id, itemData.item.title)
                        }}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: Colors.violet }]}>
                        <Text style={styles.textButton}>Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> {
                        dispatch(cartActions.addToCart(itemData.item))
                        }}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: Colors.green }]}>
                        <Text style={styles.textButton}>Add to Cart</Text>
                    </TouchableOpacity> 
                    </ProductItem>
                }
            />
        </View>
    )
}

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: <Text style={{ fontFamily: fonts.keren, fontSize: 20, color: Colors.primary, marginLeft: 10 }}>All Products</Text>,
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" 
            onPress={() => {
             navData.navigation.toggleDrawer()
            }}
            />
        </HeaderButtons>
        ) ,
        headerRight: ( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Cart" iconName="ios-cart" 
            onPress={() => {
                navData.navigation.navigate('Cart')
            }}
            />
        </HeaderButtons>
        )
    }
}

export default ProductsOverviewScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 10
        // backgroundColor: 'wheat'
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
})
