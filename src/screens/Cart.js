import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Cart Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 50,
    color: "white",
  },
  lnk: {
    color: "white",
    fontSize: 50,
  },
});

export default Cart;
