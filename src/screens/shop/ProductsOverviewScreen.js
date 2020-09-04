import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import ProductItem from '../../component/ProductItem';
import * as cartActions from '../../store/actions/cart'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch()

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
                        onViewDetail={() => {
                            props.navigation.navigate('ProductDetail', {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title
                            })
                        }}
                        onAddCart={() => {
                            dispatch(cartActions.addToCart(itemData.item))
                        }}
                    />
                }
            />
        </View>
    )
}

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: <Text style={{ fontFamily: fonts.keren, fontSize: 20, color: Colors.primary, marginLeft: 10 }}>All Products</Text>,
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
    }
})
