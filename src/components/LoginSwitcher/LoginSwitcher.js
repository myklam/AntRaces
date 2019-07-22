import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LoginSwitcher = ({ activeSwitch, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("login")}>
        <Text
          style={[
            styles.text,
            activeSwitch === "login" ? { color: "#4287f5" } : null
          ]}
        >
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("signup")}>
        <Text
          style={[
            styles.text,
            activeSwitch === "signup" ? { color: "#4287f5" } : null
          ]}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginVertical: 15
  },
  text: {
    fontSize: 18
  }
});

export default LoginSwitcher;
