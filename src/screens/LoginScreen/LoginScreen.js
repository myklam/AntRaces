import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import BigButton from "../../components/BigButton";
import FormInput from "../../components/FormInput";
import LoginSwitcher from "../../components/LoginSwitcher";

class LoginScreen extends Component {
  state = {
    activeSwitch: "login",
    username: "",
    password: "",
    passwordConfirmation: "",
    error: null,
    loading: false
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const loggedIn = await AsyncStorage.getItem("@loggedIn");
      if (JSON.parse(loggedIn)) {
        this.props.navigation.navigate("AntStats");
      }
    } catch (error) {
      return;
    }
  }

  signUp = async () => {
    const { username, password, passwordConfirmation } = this.state;

    if (!username) {
      this.setState({ error: "You must supply a username" });
      return;
    }

    if (password !== passwordConfirmation) {
      this.setState({ error: "Hmmm, looks like your passwords do not match" });
      return;
    }

    try {
      const usernameArr = ["@username", username];
      const passwordArr = ["@password", password];
      const loggedInArr = ["@loggedIn", JSON.stringify(true)];
      await AsyncStorage.multiSet([usernameArr, passwordArr, loggedInArr]);
      this.props.navigation.navigate("AntStats");
    } catch (error) {
      this.setState({ error: "There was an error signing you up" });
      console.tron.log(error);
      return;
    }
  };

  logIn = async () => {
    const { username, password } = this.state;

    try {
      const [usernameArr, passwordArr] = await AsyncStorage.multiGet([
        "@username",
        "@password"
      ]);
      const [usernameKey, storedUsername] = usernameArr;
      const [passwordKey, storedPassword] = passwordArr;

      if (username !== storedUsername || password !== storedPassword) {
        this.setState({ error: "Username/password not recognized" });
        return;
      }

      await AsyncStorage.setItem("@loggedIn", JSON.stringify(true));
      this.props.navigation.navigate("AntStats");
    } catch (error) {
      this.setState("There was an error logging you in");
      return;
    }
  };

  onPressButton = () => {
    this.state.activeSwitch === "login" ? this.logIn() : this.signUp();
  };

  render() {
    const {
      activeSwitch,
      error,
      username,
      password,
      passwordConfirmation
    } = this.state;

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {activeSwitch === "login" ? "Log In" : "Sign Up"}
        </Text>
        <FormInput
          placeholder="username"
          value={username}
          onChangeText={val => this.setState({ username: val })}
        />
        <FormInput
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={val => this.setState({ password: val })}
        />
        {activeSwitch === "signup" && (
          <FormInput
            placeholder="password again"
            secureTextEntry={true}
            value={passwordConfirmation}
            onChangeText={val => this.setState({ passwordConfirmation: val })}
          />
        )}
        {error && <Text style={styles.error}>{error}</Text>}
        <BigButton
          label={activeSwitch === "login" ? "Log In" : "Sign Up"}
          onPress={this.onPressButton}
        />
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
  },
  error: {
    color: "red"
  }
});
export default LoginScreen;
