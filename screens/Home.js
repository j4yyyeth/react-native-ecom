import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txt}>The Wine App</Text>
            <Text style={styles.txtSmall}>We Sell Luxury Wines From Around the World</Text>
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
    txtSmall: {
        color: 'white',
    }
})

export default Home;
