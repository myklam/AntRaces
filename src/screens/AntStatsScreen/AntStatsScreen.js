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

import AntsTable from "../../components/AntsTable";
import AntCarousel from "../../components/AntCarousel";

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
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View style={styles.loadingContainer}>
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
              <AntsTable ants={data.ants} />
              <AntCarousel />
            </View>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logInBtn: {
    marginRight: 10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AntStatsScreen;
