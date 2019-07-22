import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import BigButton from "../../components/BigButton";
import FormInput from "../../components/FormInput";
import LoginSwitcher from "../../components/LoginSwitcher";

class LoginScreen extends Component {
  state = {
    activeSwitch: "login"
  };

  render() {
    const { activeSwitch } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {activeSwitch === "login" ? "Log In" : "Sign Up"}
        </Text>
        <FormInput placeholder="username" />
        <FormInput placeholder="password" secureTextEntry={true} />
        {activeSwitch === "signup" && (
          <FormInput placeholder="password again" secureTextEntry={true} />
        )}
        <BigButton label={activeSwitch === "login" ? "Log In" : "Sign Up"} />
        <LoginSwitcher
          activeSwitch={activeSwitch}
          onPress={switcher => this.setState({ activeSwitch: switcher })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 26
  }
});
export default LoginScreen;
