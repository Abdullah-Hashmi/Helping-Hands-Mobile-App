import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "../navigation/MainContainer";

const Bottomtab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>bottomtab</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bottomtab;
