import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import ProductItem from "../../components/ProductItem";

const ProductDetails = () => {
  const route = useRoute(); 
  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Product Details Screen</Text>
      <ProductItem title={params.title} description={params.description} imageUrl={params.imageUrl}/>
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
});

export default ProductDetails;
