import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constant/Colors';
import { fonts } from '../asset/fonts';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} 
        color={Colors.green}
        IconComponent={Ionicons} iconSize={24}/>
    )
}

export default CustomHeaderButton

const styles = StyleSheet.create({
    container: {

    }
})
