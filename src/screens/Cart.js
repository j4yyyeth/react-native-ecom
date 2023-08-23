import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>

      <View style={styles.cartItem}>
        <Text style={styles.itemName}>Item 1</Text>
        <Text style={styles.itemPrice}>$10.00</Text>
      </View>
      <View style={styles.cartItem}>
        <Text style={styles.itemName}>Item 2</Text>
        <Text style={styles.itemPrice}>$15.00</Text>
      </View>

      <Text style={styles.total}>Total: $25.00</Text>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Buy</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: "black",
  },
  itemPrice: {
    fontSize: 16,
    color: "black",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  orderButton: {
    backgroundColor: "#FF5733",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
