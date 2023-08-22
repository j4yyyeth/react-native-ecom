import { React, useLayoutEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ProductItem from "../../components/ProductItem";

const ProductDetails = () => {
  const route = useRoute(); 
  const navigation = useNavigation();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.title
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ProductItem title={params.title} winery={params.winery} imageUrl={params.imageUrl}/>
      <Text style={styles.buy}>Buy Now</Text>
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
  buy: {
    fontSize: 30,
    color: "red",
  }
});

export default ProductDetails;
