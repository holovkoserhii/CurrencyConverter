import React from "react";
import PropTypes from "prop-types";

import { FlatList, View, StatusBar } from "react-native";
import { ListItem, Separator } from "../components/List";

import currencies from "../data/currencies";

const TEMP_CURRENT_CURRENCY = "UAH";

const CurrencyList = ({ navigation }) => {
  const handlePress = () => {
    console.log("row pressed");
    navigation.goBack(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            selected={item === TEMP_CURRENT_CURRENCY}
            onPress={handlePress}
            checkmark
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
};

export default CurrencyList;
