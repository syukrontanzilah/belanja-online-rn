import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <View style={styles.page}>
            {/* <StatusBar backgroundColor="wheat"/> */}
            <Text>product overview screen</Text>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => <Text>{itemData.item.title}</Text>}
            />
        </View>
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: <Text style={{ fontFamily: fonts.keren, fontSize: 20, color: Colors.primary }}>All Products</Text>
}

export default ProductsOverviewScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'wheat'
    }
})
