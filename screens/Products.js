import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const { navigate } = useNavigation();
  const products = [
    {
      id: "1",
      title: "Wine 1",
      description: "Wine 1 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "2",
      title: "Wine 2",
      description: "Wine 2 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "3",
      title: "Wine 3",
      description: "Wine 3 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "4",
      title: "Wine 4",
      description: "Wine 4 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "5",
      title: "Wine 5",
      description: "Wine 5 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "6",
      title: "Wine 6",
      description: "Wine 6 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "7",
      title: "Wine 7",
      description: "Wine 7 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "8",
      title: "Wine 8",
      description: "Wine 8 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "9",
      title: "Wine 9",
      description: "Wine 9 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "10",
      title: "Wine 10",
      description: "Wine 10 is a wine with ...",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigate("ProductDetails");
      }}
    >
      <ProductItem
        title={item.title}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  productGrid: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

export default Products;
