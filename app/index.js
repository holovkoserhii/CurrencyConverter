import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $mainHeaderTextColor: "#ffffff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGrey: "#e0e0e0",
});

export default () => <Home />;
