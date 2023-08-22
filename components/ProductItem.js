import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const ProductItem = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.product}
          source={{
            uri: imageUrl,
          }}
        />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "white",
    margin: 3,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  product: {
    height: 110,
    width: 110,
  },
  title: {
    color: "red",
    fontSize: 30,
  },
  description: {
    color: "black",
  },
});

export default ProductItem;
