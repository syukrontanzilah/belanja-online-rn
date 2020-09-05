import React from 'react'
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'
import { fonts } from '../../asset/fonts';
import Colors from '../../constant/Colors';
import OrderItem from '../../component/OrderItem'

const OrdersScreen = (props) => {
    const orders = useSelector(state => state.orders.orders)
    if(orders.length === 0 || !orders){
      return <View style={{flex:1, justifyContent:'center', alignItems:'center',}}><Image style={{opacity:0.2, borderRadius:50}} source={require('../../asset/cartempty.jpg')}/><Text style={{fontFamily: fonts.default, fontSize:20, marginBottom:10, color: Colors.primary}}>Opps.. you have not Order</Text>
      <Button color={Colors.primary} onPress={()=> {props.navigation.navigate('ProductsOverview')}} title="Try to see our produck :)"/></View>  
    }
    return (
        <View style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={orders}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                               <OrderItem
                            amount={itemData.item.totalAmount.toFixed(2)}
                            date={itemData.item.readableDate}
                            items={itemData.item.items}
                        />
                }
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
        marginHorizontal: 10
    }
})
