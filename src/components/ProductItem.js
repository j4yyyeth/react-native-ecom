import React from "react";
import { StyleSheet, Text, Image, View, Pressable, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

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
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{winery}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.averageRating}>{averageRating} <AntDesign name="star" size={10} color="#F4C430" /></Text>
          <Text style={styles.totalRatings}>({totalRatings})</Text>
        </View>
      </View>
    </Pressable>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: windowWidth / 2 - 10,
    margin: 5,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
  },
  productContainer: {
    padding: 10,
    alignItems: "center",
  },
  productImage: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },
  title: {
    color: "black",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
  location: {
    color: "gray",
    fontSize: 12,
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    color: "gray",
    fontSize: 12,
  },
  averageRating: {
    color: "black",
    fontSize: 12,
    marginLeft: 3,
  },
  totalRatings: {
    color: "gray",
    fontSize: 12,
  },
});

export default ProductItem;
