import React from "react";
import PropTypes from "prop-types";

import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ListItem, Separator } from "../components/List";
import { connectAlert } from "../components/Alert";

const Options = ({ navigation, alertWithType }) => {
  const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
  const ICON_COLOR = "#868686";
  const ICON_SIZE = 23;

  const handleThemesPress = () => navigation.navigate("Themes");
  const handleSitePress = () => Linking.openURL("https://www.facebook.com/holovko.s").catch(() => alertWithType("error", "Sorry!", "This page can't be opened presently :("));

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handleThemesPress}
        customIcon={
          <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
        }
      />
      <Separator />
      <ListItem
        text="Me on Facebook"
        onPress={handleSitePress}
        customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
      />
      <Separator />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func,
};

export default connectAlert(Options);
