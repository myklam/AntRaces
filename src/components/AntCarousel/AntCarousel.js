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
          loopClonesPerSide={100}
          renderItem={() => <AntImage />}
          sliderWidth={350}
          itemWidth={120}
          autoplay={true}
          autoplayDelay={0}
          autoplayInterval={100}
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
