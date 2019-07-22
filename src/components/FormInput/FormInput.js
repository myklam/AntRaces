import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const FormInput = props => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderColor: "#888888",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8
  }
});

export default FormInput;
