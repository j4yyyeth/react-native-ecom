import React from "react";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";

const ProductItem = ({
  title,
  winery,
  location,
  averageRating,
  totalRatings,
  imageUrl,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.product}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.description}>{winery}</Text>
      </View>
    </Pressable>
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
    height: 100,
    width: 30,
  },
  title: {
    color: "red",
    fontSize: 10,
  },
  description: {
    color: "black",
  },
});

export default ProductItem;
