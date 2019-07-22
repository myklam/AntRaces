import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TableHeaders = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Name</Text>
    <Text style={styles.text}>Status</Text>
    <Text style={styles.text}>Odds</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: "#000",

    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 15
  },
  text: {
    fontSize: 15,
    fontWeight: "600"
  }
});

export default TableHeaders;
