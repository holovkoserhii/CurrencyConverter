import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, StatusBar } from "react-native";
import { connect } from "react-redux";

import { ListItem, Separator } from "../components/List";
import currencies from "../data/currencies";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

const CurrencyList = ({ baseCurrency, quoteCurrency, primaryColor, navigation, dispatch }) => {
  let comparisonCurrency = baseCurrency;
  if (navigation.state.params.type === "quote") {
    comparisonCurrency = quoteCurrency;
  }

  const handlePress = currency => {
    const { type } = navigation.state.params;
    if (type === "base") {
      dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      dispatch(changeQuoteCurrency(currency));
    }
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
            selected={item === comparisonCurrency}
            onPress={() => handlePress(item)}
            iconBackground={primaryColor}
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
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,
};

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps)(CurrencyList);
