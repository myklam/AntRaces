import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { generateAntWinLikelihoodCalculator } from "../../utils";

class AntRow extends Component {
  state = {
    status: "Not run...",
    odds: null
  };

  componentDidMount() {
    this.calculateOdds();
  }

  calculateOdds = () => {
    this.setState({ status: "running..." });
    const calculator = generateAntWinLikelihoodCalculator();
    calculator(result => {
      this.setState({ status: "calculated" });
      this.props.onCalculationFinished(this.props.ant.name, result.toFixed(2));
    });
  };

  render() {
    const { status } = this.state;
    const { odds } = this.props.ant;

    return (
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          {this.props.ant.name}
        </Text>
        <View style={styles.centeredText}>
          <Text style={[styles.text, styles.centeredText]}>{status}</Text>
        </View>
        <View style={styles.centeredText}>
          <Text style={styles.text}>{odds}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#888",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 5
  },
  text: {
    fontSize: 13,
    flex: 1
  },
  centeredText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AntRow;
