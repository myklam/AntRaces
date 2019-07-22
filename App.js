import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import MainNavigator from "./src/navigation/MainNavigator";

const client = new ApolloClient({
  uri: "https://antserver-blocjgjbpw.now.sh/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
