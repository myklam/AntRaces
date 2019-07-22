import React, { Component } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import AsyncStorage from "@react-native-community/async-storage";

import TableHeaders from "../../components/TableHeaders";

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
      <Query
        query={gql`
          {
            ants {
              name
              color
              length
              weight
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator />
              </View>
            );
          }
          if (error) {
            return (
              <View style={styles.container}>
                <Text>There was an error loading the data</Text>
              </View>
            );
          }

          return (
            <View style={styles.container}>
              <TableHeaders />
            </View>
          )
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logInBtn: {
    marginRight: 10
  }
});

export default AntStatsScreen;
