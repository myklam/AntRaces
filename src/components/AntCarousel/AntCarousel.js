import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

import AntImage from "../AntImage";

class AntCarousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          layout={"default"}
          data={[1, 2, 3]}
          loop={true}
          firstItem={1}
          loopClonesPerSide={10}
          renderItem={() => <AntImage />}
          sliderWidth={400}
          itemWidth={100}
          autoplay={true}
        />
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
