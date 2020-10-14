import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { fonts } from '../../asset/fonts'
import Colors from '../../constant/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../component/HeaderButton'
import {useSelector} from 'react-redux'

const EditProductScreen = (props) => {
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));

    const [title, setTitle] = useState(editedProduct ? editedProduct.title: "");
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl :"");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : "");

  


  

    return (
        <ScrollView>
            <View style={styles.form}>
        <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} 
            value={title}
            onChangeText={text => setTitle(text)}/>
        </View>  
        <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}/>
        </View>  

        {editedProduct ? null : 

        <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input}
            value={price}
            onChangeText={text => setPrice(text)}/>
</View> }


        <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}/>
        </View> 
        </View>
        </ScrollView>

    )
}

EditProductScreen.navigationOptions = navData => {
    return {
       headerTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product', 
       headerRight:   <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item title="Save" iconName="md-checkmark"
           onPress={() => {
            
           }}
       />
   </HeaderButtons> 
    }
}

export default EditProductScreen

const styles = StyleSheet.create({
    form: {
        margin:20,
    },
    formControl:{
        width:'100%',
        marginTop:10,
    },
    label: {
        fontFamily: fonts.default,
        fontSize:18,
        color: Colors.green,
        marginVertical:5
    },
    input: {
        paddingHorizontal:2,
        paddingVertical:5,
        fontFamily: fonts.default,
        fontSize:20,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
    }
})
