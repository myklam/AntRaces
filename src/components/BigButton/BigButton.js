import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BigButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#4287f5",
    margin: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default BigButton;
