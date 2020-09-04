import React from 'react'
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import ProductItem from '../../component/ProductItem';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
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
                        onViewDetail={() => { }}
                        onAddCart={() => { }}
                    />
                }
            />
        </View>
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: <Text style={{ fontFamily: fonts.keren, fontSize: 20, color: Colors.primary, marginLeft:10 }}>All Products</Text>
}

export default ProductsOverviewScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal:10
        // backgroundColor: 'wheat'
    }
})
