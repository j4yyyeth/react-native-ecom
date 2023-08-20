import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductItem
        title="Wine 1"
        description="Wine 1 is a wine with ..."
        imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
      />
      <ProductItem
        title="Wine 2"
        description="Wine 2 is a wine with ..."
        imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
      />
      <ProductItem
        title="Wine 3"
        description="Wine 3 is a wine with ..."
        imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
      />
    </SafeAreaView>
  );
};

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
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    backgroundColor: "white",
    margin: 3,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  product: {
    height: 150,
    width: 150,
  },
  title: {
    color: 'black',
    fontSize: 30,
  },
  description: {
    color: 'black'
  },
});

export default Products;
