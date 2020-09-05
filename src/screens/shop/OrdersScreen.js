import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import OrderItem from '../../component/OrderItem'

const OrdersScreen = (props) => {
    const orders = useSelector(state => state.orders.orders)
    return (
        <View style={styles.screen}>

            <FlatList
            showsVerticalScrollIndicator={false}
                data={orders}
                keyExtractor={item => item.id}
                renderItem={itemData => 
                <OrderItem
                amount={itemData.item.totalAmount.toFixed(2)}
                date = {itemData.item.readableDate}
                items={itemData.item.items}
                />}
            />
        </View>
    )
}

OrdersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "My Order",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" color={Colors.primary}
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        ),
    }

}

export default OrdersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginHorizontal:10
    }
})
