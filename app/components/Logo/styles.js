import { Dimensions } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

const imageWidth = Dimensions.get("window").width * 0.5;
const imageHeight = Dimensions.get("window").height * 0.3;

export default EStyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerImage: {
    width: imageHeight,
    height: imageHeight * 1.12,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: imageWidth * 0.47,
    width: imageWidth * 0.55,
  },
  text: {
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: "$mainHeaderTextColor",
  },
});
