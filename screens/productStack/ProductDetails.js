import { React, useLayoutEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { useRoute, useNavigation, navigate } from "@react-navigation/native";
import ProductItem from "../../components/ProductItem";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation(); // navigation options --> layout
  const { navigate } = useNavigation(); // actual navigate --> diff screens
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.title,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ProductItem
        title={params.title}
        winery={params.winery}
        imageUrl={params.imageUrl}
      />
      <Button
        onPress={() => navigate("Checkout")}
        title="Buy Now"
        color="red"
        accessibilityLabel="Click to buy wine"
      />
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
  },
});

export default ProductDetails;
