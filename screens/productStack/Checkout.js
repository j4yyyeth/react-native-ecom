import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout Screen</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 20,
  },
  checkoutButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Checkout;
