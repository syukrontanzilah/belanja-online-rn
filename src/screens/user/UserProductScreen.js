import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import ProductItem from '../../component/ProductItem'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import * as productsActions from '../../store/actions/products'

const UserProductScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

const editProductHandler = (id) => {
    props.navigation.navigate('EditProduct', {productId: id})
}

    return (
        <View style={styles.page}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={userProducts}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onSelect={()=> {
                            editProductHandler(itemData.item.id)
                        }}
                    >
                    <TouchableOpacity
                        onPress={()=> {
                        editProductHandler(itemData.item.id)
                        }}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: "#b3b300" }]}>
                        <Text style={styles.textButton}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> {
                        dispatch(productsActions.deleteProduct(itemData.item.id))
                        }}
                        activeOpacity={0.7}
                        style={[styles.button, { backgroundColor: "#ff4d4d" }]}>
                        <Text style={styles.textButton}>Delete</Text>
                    </TouchableOpacity> 
                    </ProductItem>
                )}
            />
        </View>
    )
}

UserProductScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Administrator Page',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Add" iconName="md-create"
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons> 
        ) 
    }
}

export default UserProductScreen

const styles = StyleSheet.create({
    page: {
        flex: 1
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
