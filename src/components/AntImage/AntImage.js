import React, { Component } from "react";
import { Image, View } from "react-native";

class AntImage extends Component {
  render() {
    return (
      <View>
        <Image source={require("../../images/ant.png")} />
      </View>
    );
  }
}

export default AntImage;
