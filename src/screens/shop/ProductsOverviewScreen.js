import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import {useSelector} from 'react-redux'

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <View style={styles.page}>
            {/* <StatusBar backgroundColor="wheat"/> */}
            <Text>product overview screen</Text>

            <FlatList

            />

        </View>
    )
}

export default ProductsOverviewScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'wheat'
    }
})
