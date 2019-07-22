import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

class AntStatsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Ant Stats",
      headerRight: (
        <TouchableOpacity
          style={styles.logInBtn}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem("@loggedIn");
              navigation.navigate("Login");
            } catch (error) {
              return;
            }
          }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>AntStatsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logInBtn: {
    marginRight: 10
  }
});

export default AntStatsScreen;
