// import React from "react";
// import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";
// import ProductItem from "../components/ProductItem";

// const Products = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ProductItem
//         title="Wine 1"
//         description="Wine 1 is a wine with ..."
//         imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
//       />
//       <ProductItem
//         title="Wine 2"
//         description="Wine 2 is a wine with ..."
//         imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
//       />
//       <ProductItem
//         title="Wine 3"
//         description="Wine 3 is a wine with ..."
//         imageUrl="https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "black",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default Products;

import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const products = [
    {
      id: "1",
      title: "Wine 1",
      description: "Wine 1 is a wine with ...",
      imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "2",
      title: "Wine 2",
      description: "Wine 2 is a wine with ...",
      imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
      id: "3",
      title: "Wine 3",
      description: "Wine 3 is a wine with ...",
      imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
    },
    {
        id: "4",
        title: "Wine 4",
        description: "Wine 4 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "5",
        title: "Wine 5",
        description: "Wine 5 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "6",
        title: "Wine 6",
        description: "Wine 6 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "7",
        title: "Wine 7",
        description: "Wine 7 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "8",
        title: "Wine 8",
        description: "Wine 8 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "9",
        title: "Wine 9",
        description: "Wine 9 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
      {
        id: "10",
        title: "Wine 10",
        description: "Wine 10 is a wine with ...",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548",
      },
  ];

  const renderItem = ({ item }) => (
    <ProductItem title={item.title} description={item.description} imageUrl={item.imageUrl} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns here (2 for a 2-column grid)
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
