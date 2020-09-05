import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';

const OrdersScreen = (props) => {
    const orders = useSelector(state => state.orders.orders)
    return (
        <View style={styles.screen}>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
            />
        </View>
    )
}

OrdersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "My Order",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" color ={Colors.primary}
            onPress={() => {
             navData.navigation.toggleDrawer()
            }}
            />
        </HeaderButtons>
        ) ,
    }

}

export default OrdersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
