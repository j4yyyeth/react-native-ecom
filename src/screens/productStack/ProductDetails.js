import { React } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;

  const handleBuyNow = () => {
    navigation.navigate("Checkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: params.imageUrl }} style={styles.productImage} />
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.winery}>{params.winery}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleBuyNow} style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  productImage: {
    width: 150,
    height: 500,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  winery: {
    fontSize: 18,
    color: "#888",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetails;
