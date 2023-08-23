import { React, useState, useEffect } from "react";
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
import axios from "axios";

const Products = () => {
  const [data, setData] = useState("");
  const { navigate } = useNavigation();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.sampleapis.com/wines/reds"); // whites, rose, sparkling for endpoints: replace red
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductItem
            title={item.wine}
            winery={item.winery}
            location={item.location}
            averageRating={item.rating.average}
            totalRatings={item.rating.reviews}
            imageUrl={item.image}
            onPress={() =>
              navigate("ProductDetails", {
                title: item.wine,
                winery: item.winery,
                location: item.location,
                averageRating: item.rating.average,
                totalRatings: item.rating.reviews,
                imageUrl: item.image,
              })
            }
          />
        )}
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
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default Products;
