import React, { useEffect } from "react";
import { View, ImageBackground, Text, Keyboard, Animated, Platform } from "react-native";
import styles from "./styles";

const Logo = () => {
  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  const containerImageWidth = new Animated.Value(styles.$largeContainerSize);
  const imageWidth = new Animated.Value(styles.$largeImageSize);

  const ANIMATION_DURATION = 250;

  const showListener = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
  const hideListener = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

  const animatedParallel = (toValueForContainer, toValueForImage) => () => Animated.parallel([
    Animated.timing(containerImageWidth, {
      toValue: toValueForContainer,
      duration: ANIMATION_DURATION,
    }),
    Animated.timing(imageWidth, {
      toValue: toValueForImage,
      duration: ANIMATION_DURATION,
    }),
  ]).start();

  const keyboardShow = animatedParallel(styles.$smallContainerSize, styles.$smallImageSize);
  const keyboardHide = animatedParallel(styles.$largeContainerSize, styles.$largeImageSize);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(showListener, keyboardShow);
    const keyboardHideListener = Keyboard.addListener(hideListener, keyboardHide);
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const containerImageStyle = [
    styles.containerImage,
    { width: containerImageWidth, height: containerImageWidth },
  ];

  const imageStyle = [
    styles.logo,
    { width: imageWidth },
  ];
  return (
    <View style={styles.container}>
      <AnimatedImage
        resizeMode="contain"
        source={require("./images/background.png")}
        style={containerImageStyle}
      >
        <Animated.Image resizeMode="contain" style={imageStyle} source={require("./images/logo.png")} />
      </AnimatedImage>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

export default Logo;
