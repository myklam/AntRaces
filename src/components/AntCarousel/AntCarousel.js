import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import AntImage from "../AntImage";

class AntCarousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AntImage />
        <AntImage />
        <AntImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});

export default AntCarousel;
