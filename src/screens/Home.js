import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = () => {
  const newWinesData = [
    {
      id: "1",
      name: "New Wine 1",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "2",
      name: "New Wine 2",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "3",
      name: "New Wine 3",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "4",
      name: "New Wine 4",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "5",
      name: "New Wine 5",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
  ];

  const popularWinesData = [
    {
      id: "1",
      name: "Popular Wine 1",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "2",
      name: "Popular Wine 2",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "3",
      name: "Popular Wine 3",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "4",
      name: "Popular Wine 4",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "5",
      name: "Popular Wine 5",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "6",
      name: "Popular Wine 6",
      imageUrl:
        "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
  ];

  const renderWineItem = ({ item }) => (
    <View style={styles.wineItemContainer}>
      <TouchableOpacity style={styles.wineItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.wineItemImage} />
        <Text style={styles.wineItemName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/013/223/358/original/wine-logo-template-design-with-wine-glasses-and-bottles-logo-for-nightclub-bar-and-wine-shop-free-vector.jpg",
        }}
        style={styles.logo}
      />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Just In</Text>
        </View>
        <FlatList
          data={newWinesData}
          keyExtractor={(item) => item.id}
          renderItem={renderWineItem}
          horizontal
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Wines</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllButtonText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularWinesData}
          keyExtractor={(item) => item.id}
          renderItem={renderWineItem}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 50,
    color: "black",
    marginTop: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "black",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  wineItemContainer: {
    marginRight: 10,
    elevation: 3,
  },
  wineItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  wineItemImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  wineItemName: {
    color: "black",
    marginTop: 5,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  seeAllButton: {
    backgroundColor: "#FF5733",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 130,
  },
  seeAllButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Home;
