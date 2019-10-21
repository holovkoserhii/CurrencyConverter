import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";
import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="cover"
      source={require("./images/background.png")}
      style={styles.containerImage}
    >
      <Image style={styles.image} source={require("./images/logo.png")} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
