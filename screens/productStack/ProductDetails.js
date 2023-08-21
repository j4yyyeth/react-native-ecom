import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

const ProductDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txt}>Product Details Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 50,
        color: 'white'
    },
})

export default ProductDetails;