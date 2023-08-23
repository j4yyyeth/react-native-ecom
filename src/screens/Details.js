import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Details Screen</Text>
      <Link style={styles.lnk} to={{ screen: "Home" }}>
        Go Home
      </Link>
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
  lnk: {
    color: "white",
    fontSize: 50,
  },
});

export default Details;
