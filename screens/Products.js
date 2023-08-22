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
import axios from 'axios';

const Products = () => {
  const [ data, setData ] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/wines/reds');
      setData(response.data);
      data.forEach((e) => {
        console.log("ID: ", e.id);
        console.log("Location: ", e.location);
        console.log("Avg Rating: ", e.rating.average);
        console.log("# Ratings: ", e.rating.reviews);
        console.log("Wine: ", e.wine);
        console.log("Winery: ", e.winery);
        console.log("Image: ", e.image);
      })
    } catch (err) {
      console.log(err);
    }
  }
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

  
  useEffect(() => {
    fetchData();
  }, [])

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
            onPress={() => navigate("ProductDetails", {
              title: item.wine,
              winery: item.winery,
              location: item.location,
              averageRating: item.rating.average,
              totalRatings: item.rating.reviews,
              imageUrl: item.image,
            })}
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
    paddingHorizontal: 16,
  },
});

export default Products;
